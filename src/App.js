import React, {useState} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";

const app = new Clarifai.App({apiKey: '4699e2adc27f45fda88cc848781b7d8c'});

function App() {

  const particleOption = {
    particles: {
      "number": {
        value: 90,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signIn');
  const [isSingedIn, setIsSingedIn] = useState(false);

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    setBox({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    });
  };

  const onButtonSubmit = () => {
    setImageURL(input);

    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
        .then((response) => calculateFaceLocation(response))
        .catch(error => console.log(error));
}

  const onRouteChange = (route) => {
    if (route === 'home') setIsSingedIn(true);
    if (route === 'signOut') setIsSingedIn(false);
    setRoute(route);
  }

  return (
    <div className="App">
      <Particles params={particleOption} className="particles"/>
      { route === 'home' ?
          <>
            <div className="header">
              <Logo/>
              <Navigation onRouteChange={onRouteChange} isSingedIn={isSingedIn}/>
            </div>
            <Rank/>
            <ImageLinkForm
                onInputChange={onInputChange}
                input={input}
                onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition imageURL={imageURL} box={box}/>
          </>
          : route === 'signIn' || route==='signOut' ? <SignIn onRouteChange={onRouteChange}/>
          : <Register onRouteChange={onRouteChange}/>


      }
    </div>
  );
}

export default App;

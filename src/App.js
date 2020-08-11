import React, {useState} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";

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

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageURL(input);
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, input)
        .then(function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function(err) {
          // there was an error
        }
    );
  }

  return (
    <div className="App">
      <Particles params={particleOption} className="particles"/>
      <div className="header">
        <Logo/>
        <Navigation/>
      </div>
     <Rank />
     <ImageLinkForm
         onInputChange={onInputChange}
         input={input}
         onButtonSubmit={onButtonSubmit}
     />
     <FaceRecognition imageURL={imageURL}/>
    </div>
  );
}

export default App;

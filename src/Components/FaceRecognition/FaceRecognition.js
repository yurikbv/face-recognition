import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
  return (
      <div className="FaceRecognition">
        {imageURL && <img src={imageURL} alt="face" id="inputImage"/>}
        {box && <div className="bounding_box" style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol
        }}/>}
      </div>
  );
};

export default FaceRecognition;

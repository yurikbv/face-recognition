import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL}) => {
  return (
      <div className="FaceRecognition">
        {imageURL && <img src={imageURL} alt="photo"/>}
      </div>
  );
};

export default FaceRecognition;

import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, input, onButtonSubmit}) => {
  return (
      <div>
        <p className="f4">
          {'This Magik  Brain will detect faces in your pictures. Git it a try.'}
        </p>
        <div className="pa4 br3 shadow-5 form">
          <input type="text" className="f5 pa2 w-70 center" onChange={onInputChange} value={input} placeholder="URL"/>
          <button
              className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple"
              onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
  );
};

export default ImageLinkForm;

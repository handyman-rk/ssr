import React from 'react';

const CardLeft = ({ appno, totalapps, img }) => (
  <div className="col-left">
    <div className="app-no">
      <span className="current">{`0${appno}`}</span>
      <span className="connector">of </span><br />
      <span className="total">{`0${totalapps}`}</span>
    </div>
    <img className="app-icon" src={img.src} alt={img.alt} height="120" width="120" />
  </div>
)

export default CardLeft;

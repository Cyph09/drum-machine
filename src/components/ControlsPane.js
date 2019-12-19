import React from "react";

const ControlsPane = props => (
  <>
    <div id="display">
      <div className="display-text">{props.display}</div>
    </div>
    <div className="volume-slider">
      <i className="material-icons">volume_mute</i>
      <input
        type="range"
        onChange={props.changeVolume}
        min="0"
        max="100"
        step="1"
        value={props.volume}
        className="slider"
      />
      <i className="material-icons md-18">volume_up</i>
    </div>
  </>
);

export default ControlsPane;

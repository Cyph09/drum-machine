import React from "react";

const ControlsPane = props => (
  <>
    <div id="display">
      <div>{props.display}</div>
    </div>
    <div id="volumeSlider">
      <input
        type="range"
        onChange={props.changeVolume}
        min="0"
        max="100"
        step="1"
        value={props.volume}
        className="slider"
      />
    </div>
  </>
);

export default ControlsPane;

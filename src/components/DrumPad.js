import React, { Component } from "react";

const activeBtn = {
  backgroundColor: "#e65100",
  backgroundSize: "100%",
  transition: "background 0s"
};
class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  };

  handleKeyDown(event) {
    if (event.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    // TODO: Add power options leter
    const sound = document.getElementById(this.props.keyCode);
    sound.currentTime = 0;
    sound.play();
    sound.volume = this.props.volume / 100;
    sound.play();
    this.props.updateDisplay(this.props.padId);
    // TODO: Update state of button appearance breafly when playing sound
  }

  render() {
    return (
      <div>
        <div
          className="drum-pad"
          id={this.props.padId}
          keyCode={this.props.keyCode}
          onClick={this.playSound}
        >
          <audio
            id={this.props.keyCode}
            className="sound"
            src={this.props.soundUrl}
          ></audio>
          {this.props.keyName}
        </div>
      </div>
    );
  }
}

export default DrumPad;

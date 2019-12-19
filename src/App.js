import React, { Component } from "react";
import "./App.scss";
import ControlsPane from "./components/ControlsPane";
import PadsPane from "./components/PadsPane";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { display: "", audioVolume: 50 };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }

  updateDisplay(value) {
    return this.setState({ display: value });
  }

  adjustVolume(event) {
    this.setState({
      audioVolume: event.target.value
    });
    this.updateDisplay(`Volume: ${event.target.value}`);
  }
  render() {
    return (
      <div id="drum-machine" className="container">
        <ControlsPane
          display={this.state.display}
          volume={this.state.audioVolume}
          changeVolume={this.adjustVolume}
        />
        <PadsPane
          updateDisplay={this.updateDisplay}
          volume={this.state.audioVolume}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import DrumPad from "./DrumPad";

const padsInfo = [
  {
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyName: "Q",
    keyCode: 81
  },
  {
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyName: "W",
    keyCode: 87
  },
  {
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyName: "E",
    keyCode: 69
  },
  {
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyName: "A",
    keyCode: 65
  },
  {
    id: "clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyName: "S",
    keyCode: 83
  },
  {
    id: "Open-HitHat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyName: "D",
    keyCode: 68
  },
  {
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyName: "Z",
    keyCode: 90
  },
  {
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyName: "X",
    keyCode: 88
  },
  {
    id: "Closed-HiHat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyName: "C",
    keyCode: 67
  }
];

const PadsPane = ({ updateDisplay, volume }) => {
  const drumPad = padsInfo.map(pad => (
    <DrumPad
      key={pad.id}
      updateDisplay={updateDisplay}
      padId={pad.id}
      soundUrl={pad.url}
      keyName={pad.keyName}
      keyCode={pad.keyCode}
      volume={volume}
    />
  ));
  return <div className="pads-pane">{drumPad}</div>;
};

export default PadsPane;

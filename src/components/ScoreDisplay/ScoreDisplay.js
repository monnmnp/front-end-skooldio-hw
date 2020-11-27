import React from "react";
import logo from '../../assets/engi.svg'; 
import RoundDisplay from './RoundDisplay'
import './ScoreDisplay.css'
import SelectedRoundDisplay from "./SelectedRoundDisplay";

const ScoreDisplay = (props) => {
  return (
    <div className="score-display-container" >
        <RoundDisplay rounds={props.round}/>
        <SelectedRoundDisplay score={props.score} />
    </div>
  );
};

export default ScoreDisplay;

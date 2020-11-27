import React from "react";
import logo from '../../assets/engi.svg'; 
import RoundDisplay from './RoundDisplay'
import './ScoreDisplay.css'

const SelectedRoundDisplay = (props) => {
  return (
    <div className="selected-round-container" >
        <div>รอบที่ {props.score.id} : {props.score.name}</div>
    </div>
  );
};

export default SelectedRoundDisplay;

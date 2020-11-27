import React from "react";
import './ScoreRatioDisplay.css'
import playButton from '../../assets/engi.svg'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const ScoreRatioDisplay = (props) => {
  return (
    <div className="scroe-ratio-container" >
        <FontAwesomeIcon icon={faPlay} className="triangle"/>
        <div className="scroe-ratio-content">ดูสัดส่วนคะแนน</div>
    </div>
  );
};

export default ScoreRatioDisplay;

import React from "react";
import './ScoreDisplay.css'

const RoundDisplay = (props) => {
    let round = (
        <div className="round-oval">
          {props.rounds.map((round, index) => {
            return <div key={round.id} className={`oval ${round.isClose ? "": "green"}`}><div className="oval-content">{round.id}</div></div>
          })}
        </div>
      );
  return (
      <div className="round-container">
        <div className="round-content" >
            รอบที่เปิด
        </div>
        {round}
      </div>
  );
};

export default RoundDisplay;

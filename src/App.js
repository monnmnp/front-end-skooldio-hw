import React, { Component } from "react";
// import "./Person/Person.css";
import "./App.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScoreDisplay from "./components/ScoreDisplay/ScoreDisplay";
import ScoreRatioDisplay from "./components/ScoreRatioDisplay/ScoreRatioDisplay";

class App extends Component {
  state = {
    faculty:  { id: "engineering",name: "คณะวิศวกรรมศาสตร์", department: "สาขาวิศวกรรมทั่วไป", university: "จุฬาลงกรณ์มหาวิทยาลัย" },
    round :[
      {id:1, isClose: false},
      {id:2, isClose: false},
      {id:3, isClose: true},
      {id:4, isClose: false},
      {id:5, isClose: true},
    ],
    score:[{round:4, name:"Admission", score:23453, min: 20845, mean: 21345, max:23415, sc: 60}],
    user: 10
  };

  render() {
    const {faculty, round, score, user} = this.state
    return (
      <div className="App">
        {/* <h1>Hi, I'm React App</h1> */}
        <Header faculty={faculty} />
        <div className="Path-4" />
        <ScoreDisplay round={round} score={score}/>
        <div className="Path-4" />
        <ScoreRatioDisplay />
        <div className="Path-4" />
        <Footer user={user}/>
      </div>
    );
  }
}

export default App;

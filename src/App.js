//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeamScore, setAwayTeamScore] = useState(0);

  const updateScore = function (event) {
    const targetClass = event.target.className;

    if(targetClass === 'homeButtons__touchdown'){
    setHomeTeamScore(homeTeamScore + 10);
    } else if (targetClass === 'homeButtons__fieldGoal') {
      setHomeTeamScore(homeTeamScore + 150);
    } else if (targetClass === 'awayButtons__touchdown') {
      setAwayTeamScore(awayTeamScore + 10);
    } else if (targetClass === 'awayButtons__fieldGoal') {
      setAwayTeamScore(awayTeamScore + 150);
    }
  }

  
  let scoreboardBackground ={
    background: '#7F0909'
  };

  let ravenclaw = {
    background: '#000A90',
    color: '#946B2D',
    // borderRadius: '20%',
    width: '75%',
    fontSize: '115%',
  }

  let slytherin = {
    background: '#0D6217',
    color: '#AAAAAA',
    // borderRadius: '20%',
    width: '75%',
    fontSize: '115%',

  }


  return (
    <div className="container">
      <section className="scoreboard" style={scoreboardBackground}>
        <div className="topRow">
          <div className="home">
            <h2 className="home__name" style={ravenclaw}>Ravenclaw</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeTeamScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name"style={slytherin}>Slytherin</h2>
            <div className="away__score">{awayTeamScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={updateScore}>Home Goal</button>
          <button className="homeButtons__fieldGoal" onClick={updateScore}>Home Caught Golden Snitch</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={updateScore}>Away Goal</button>
          <button className="awayButtons__fieldGoal" onClick={updateScore}>Away Caught Golden Snitch</button>
        </div>
      </section>
    </div>
  );
}

export default App;

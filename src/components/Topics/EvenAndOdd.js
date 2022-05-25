import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  updateUserInput = (value) => {
    this.setState({ userInput: value });
  };

  findingEvenAndOdds = (userInput) => {
    let arr = userInput.split(",");
    let evens = [];
    let odds = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10));
      } else {
        odds.push(parseInt(arr[i], 10));
      }
    }
    this.setState({ evenArray: evens, oddArray: odds });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4 value="Even and Odds"></h4>
        <input
          className="inputLine"
          onChange={(event) => this.updateUserInput(event.target.value)}
        >
          <button
            className="confirmationButton"
            onClick={() => this.updateUserInput(event.target.value)}
          >
            <span className="resultsBox">
              Evens: {JSON.stringify(this.state.evenArray)}
              <span className="resultsBox">
                Odds: {JSON.stringify(this.state.oddArray)}
              </span>
            </span>
          </button>
        </input>
      </div>
    );
  }
}

export default EvenAndOdd;

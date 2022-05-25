import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy",
      ],
      userInput: "",
      filteredNames: [],
    };
  }

  nameChange = (value) => {
    this.setState({ userInput: value });
  };

  filterNames(userInput) {
    var names = this.state.names;
    var filteredNames = [];

    for (var i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText" />
        Names: {JSON.stringify(this.state.names, null, 10)}
        <input
          className="inputLine"
          onChange={(event) => {
            this.nameChange(event.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterNames(this.state.userInput);
          }}
        />
        Filter
        <span className="resultsBox filterStringRB" />
        Filtered Array: {JSON.stringify(this.state.filteredNames, null, 10)}
      </div>
    );
  }
}

export default FilterString;

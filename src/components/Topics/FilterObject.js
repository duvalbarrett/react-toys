import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12,
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown",
        },
        {
          name: "Carly Armstrong",
          title: "CEO",
        },
      ],

      userInput: "",
      filteredEmployees: [],
    };
  }

  filterChange = (value) => {
    this.setState = { userInput: value };
  };

  filterEmployees(prop) {
    var employees = this.state.employees;
    var filteredEmployees = [];

    for (var i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleBox filterObjectPB" />
        unFiltered: {JSON.stringify(this.state.employees, null, 10)}
        <input
          className="inputLine"
          onChange={(event) => {
            this.filterChange(event.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterEmployees(event.target.value);
          }}
        />
        <span className="resultsBox filterObjectRB" />
        Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}
      </div>
    );
  }
}

export default FilterObject;

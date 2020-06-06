import React, { Component } from "react";
import { Table, TableCell, TableRow } from "./components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //color:"",
      row: 1,
      column: 1
    };
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleRemEvent = this.handleRemEvent.bind(this);
  }

  handleAddEvent = e => {
    if (e.target.value === "addR") {
      this.setState({
        row: this.state.row + 1
      });
    } else if (e.target.value === "addC") {
      this.setState({
        column: this.state.column + 1
      });
    }
  };

  handleRemEvent = e => {
    if (e.target.value === "remR") {
      if (this.state.row > 1) {
        // checks if number is negative
        this.setState({
          row: this.state.row - 1
        });
      } else {
        console.log("no bueno");
      }
    } else if (e.target.value === "remC") {
      if (this.state.column > 1) {
        this.setState({
          column: this.state.column - 1
        });
      } else {
        console.log("No bueno");
      }
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Grid</h1>
          <div>
            <button value="addR" onClick={this.handleAddEvent}>
              Add Row
            </button>
            <button value="addC" onClick={this.handleAddEvent}>
              Add Cell
            </button>
            <button value="remR" onClick={this.handleRemEvent}>
              Remove Row
            </button>
            <button value="remC" onClick={this.handleRemEvent}>
              Remove Column
            </button>
          </div>
        </div>
        <Table row={this.state.row} column={this.state.column} />
      </>
    );
  }
}

export default App;

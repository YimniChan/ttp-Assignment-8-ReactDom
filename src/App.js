import React, { Component } from "react";
import { Table, TableCell, TableRow } from "./components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:"#FFFFFF",
      row: 1,
      column: 1
    };
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleRemEvent = this.handleRemEvent.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
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

  selectedColor = (color) =>{
    this.setState({
      color: color.target.value
    });
    console.log("App event handler " + this.state.color)
  }
  
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
              Add Column
            </button>
            <button value="remR" onClick={this.handleRemEvent}>
              Remove Row
            </button>
            <button value="remC" onClick={this.handleRemEvent}>
              Remove Column
            </button>
          </div>
          <div>
            <p>Select a cell color: 
              <select id = "color-select"  onChange={this.selectedColor}>
                <option value="" selected disabled hidden>Select Color:</option>
                <option value="#CCCCFF">Lavender Blue</option>
                <option value="#FFCCD9">Pink Lace </option>
                <option value="#CCFFCC">Snowy Mint</option>
                <option value="#CCF2FF">Pattens Blue</option>
              </select>
            </p>
          </div>
        </div>
        <Table row={this.state.row} column={this.state.column} color={this.state.color}/>
      </>
    );
  }
}

export default App;

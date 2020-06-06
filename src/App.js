import React, { Component } from "react";
import { Table, TableCell, TableRow} from "./components"
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
        //color:"",
        row:0,
        column:0
    }
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  handleAddEvent=(e)=>{
    if(e.target.value === "addR"){
      this.setState({
      row: this.state.row+1
    })
    }
    else {
      this.setState({
    column: this.state.column+1
    })
    }
    // this.setState({
    //   [e.target.value]: this.state.
    // })
  }

  render() {
    return (
      <>
      <div className="App">
        <h1>Grid</h1>
        <div>
          <button value="addR" onClick={this.handleAddEvent} >Add Row</button>
          <button value="addC" onClick={this.handleAddEvent}>Add Cell</button>
         </div>
         
      </div>
      <Table 
      row={this.state.row}
      column={this.state.column}
      />
      </>
    );
 }
}

export default App;

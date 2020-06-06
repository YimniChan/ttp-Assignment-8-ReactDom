import React, { Component } from "react";
import TableCell from "./TableCell";
import Table from "./Table";

class TableRow extends Component {
  render() {
    let tableCells = []; // pushing the columns
    for (let i = 1; i < this.props.column; i++) {
      // starts at 1
      tableCells.push(<TableCell />);
    }
    return <tr>{tableCells}</tr>;
  }
}
export default TableRow;

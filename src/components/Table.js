import React, { Component } from "react";

import TableRow from "./TableRow"


class Table extends Component {
    constructor(props){
        super(props)
        this.state={
            //color:"",
            row:this.props.row,
            column:this.props.row
        }
        this.handleAddEvent = this.handleAddEvent.bind(this);
      }


   // <table id="table"></table>

}
export default Table;
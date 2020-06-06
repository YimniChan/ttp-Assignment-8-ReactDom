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
    }
    // addRow=(row)=>{
    //     let newRow = document.createElement("tr");

    // }


    render(){
        return(
        <table id="table">
            <TableRow  />
            <TableRow  />
        </table>
        )
    }


   ///inside have TableCell.js

}
export default Table;
import React, { Component } from "react";

class TableCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color:this.props.color,
        };
        //this.handleColor = this.handleColor.bind(this);
    }

    componentDidUpdate() {
        if (
          this.props.color != this.state.color 
        ) {
          this.setState({ color: this.props.color});
        }
      }

    render() {
        return(
        <td value={this.state.color} style={{ backgroundColor: this.state.color}} onClick={this.componentDidUpdate}></td>
        )
    }
}

export default TableCell;


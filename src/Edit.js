import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";
class Edit extends Component {
  render() {
    return (
      <div className="edit">
        <p onClick={this.handleClick}>Edit</p>
      </div>
    );
  }
}

export default Edit;

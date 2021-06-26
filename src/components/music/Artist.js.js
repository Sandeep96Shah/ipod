import React, { Component } from "react";

class Artist extends Component {
  // function to handle menu click 
  handleClick=()=>{
    const{ handleMenuClick}=this.props;
    handleMenuClick();
  }
  render() {
    return (
      <div>
        <div className="screen">
          <div className="display">
            <div className="artist"></div>
          </div>
        </div>
      </div>
    );
  }
}
//exporting the component
export default Artist;

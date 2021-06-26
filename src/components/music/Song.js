import React, { Component } from "react";

class Song extends Component {
  // handling the Menu Click 
  handleClick=()=>{
    const{ handleMenuClick}=this.props;
    handleMenuClick();
  }
  render() {
    return (
      <div>
        <div className="screen">
          <div className="display">
            <div className="song"></div>
          </div>
        </div>
      </div>
    );
  }
}

//exporting the component
export default Song;

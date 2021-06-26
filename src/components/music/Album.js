import React, { Component } from "react";

class Game extends Component {
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
            <div className="album"></div>
          </div>
        </div>
      </div>
    );
  }
}
//exporting the component
export default Game;

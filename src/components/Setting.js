import React, { Component } from "react";

class Music extends Component {
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
            <div className="setting">
                
            </div>
          </div>
        </div>
        {/* handling the buttons */}
        <div className="wheel" >
            <button className="home-btn" onClick={this.handleClick}>HOME</button>
            <button className="enter-btn">ENTER</button>
        </div>
      </div>
    );
  }
}

//exporting the component
export default Music;

import React, { Component } from "react";

class Screen extends Component {
  // handling the rotation of the wheel
  handleWheelClick=(e)=>
  {
      const {handleZesture}=this.props;
      handleZesture(e);
  }

  // handling the menu click 
  handlemenuClick=()=>
  {
      const {handleMenuClick}=this.props;
      handleMenuClick();
  }

  // handling the Enter menu 
  handleEnterclick=()=>
  {
      const{handleClick}=this.props;
      handleClick();
  }
  
  render() {
    {/* keeping the state to show the active state and to go to further component */}
    const {showCardflow,
      showGame,
      showMusic,
      showSetting,
      }=this.props;
    return (
      <div>
        <div className="screen">
          <div className="display">
            <div className="mini-display">
              <div className="header">
                  Ipod.js
              </div>
              {/* to display the active list */}
              <div className="option">
                  <div className={`list ${showCardflow?'active-btn':''}`}>CoverFlow</div>
                  <div className={`list ${showMusic?'active-btn':''}`}>Music</div>
                  <div className={`list ${showGame?'active-btn':''}`}>Games</div>
                  <div className={`list ${showSetting?'active-btn':''}`}>Setting</div>
              </div>
            </div>
          </div>
        </div>
        {/* handling the buttons */}
        <div className="wheel" onClick={this.handleWheelClick}>
            <button className="home-btn" onClick={this.handlemenuClick}>HOME</button>
            <button className="enter-btn" onClick={this.handleEnterclick}>ENTER</button>
        </div>
      </div>
    );
  }
}

//exporting the component
export default Screen;

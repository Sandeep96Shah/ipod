import React from "react";
import Screen from "./Screen";
import Music from "./Music";
import Setting from "./Setting";
import Game from "./Game";
import CardFlow from "./CardFlow";
import ZingTouch from "zingtouch";

class App extends React.Component {
  constructor() {
    super();

    //states to manage the components
    this.state = {
      showCardflow: true,
      showMusic: false,
      showGame: false,
      showSetting: false,
      showComponent: false,

      showMusicComponent: false,
    };
  }

  // function to handle the rotation of mouse
  handleZesture = (e) => {
    console.log("state***", this.state);

    const context = this;
    var distance = 0;
    var region = new ZingTouch.Region(e.target);
    region.bind(e.target, "rotate", function (e) {
      console.log("last distancce details", e.detail.distanceFromLast);
      console.log("rotate details", e.detail.distanceFromOrigin);
      distance = e.detail.distanceFromOrigin;

      // making the component active based on the distance-ClockWise-direction

      // making the CardFlow component active
      if (distance > 0 && distance < 85) {
        context.setState({
          showCardflow: true,
          showMusic: false,
          showSetting: false,
        });
      }

      // making the CardFlow component as inactive and
      //Music component as active
      else if (distance > 85 && distance < 177) {
        context.setState({
          showMusic: true,
          showCardflow: false,
          showGame: false,
        });
      }

      // making the Music component as inactive and
      //Game components as active
      else if (distance > 177 && distance < 244) {
        context.setState({
          showMusic: false,
          showGame: true,
          showSetting: false,
        });
      }

      //making Game component as inactive and
      //Setting component as active
      else if (distance > 244 && distance < 360) {
        context.setState({
          showGame: false,
          showSetting: true,
        });
      }

      // doing the same for the anti-clock-Wise direction
      if (distance > -90 && distance < 0) {
        context.setState({
          showCardflow: false,
          showSetting: true,
          showGame: false,
        });
      } else if (distance > -168 && distance < -90) {
        context.setState({
          showGame: true,
          showSetting: false,
          showMusic: false,
          showCardflow: false,
        });
      } else if (distance > -271 && distance < -168) {
        context.setState({
          showGame: false,
          showCardflow: false,
          showMusic: true,
        });
      } else if (distance > -360 && distance < -271) {
        context.setState({
          showSetting: false,
          showCardflow: true,
          showMusic: false,
        });
      }
    });
  };

  // handling the Enter Click
  handleClick = () => {
    this.setState({ showComponent: true });
  };

  // handling the Menu Click
  handleMenuClick = () => {
    this.setState({ showComponent: false });
  };
  render() {
    console.log("in render", this.state);
    const {
      showCardflow,
      showGame,
      showMusic,
      showSetting,
      showComponent,
    } = this.state;
    return (
      <div>
        {
          // rendering the components based on their activeness
          showComponent ? (
            showCardflow ? (
              <CardFlow handleMenuClick={this.handleMenuClick} />
            ) : showMusic ? (
              <Music handleMenuClick={this.handleMenuClick} />
            ) : showGame ? (
              <Game handleMenuClick={this.handleMenuClick} />
            ) : (
              <Setting handleMenuClick={this.handleMenuClick} />
            )
          ) : (
            <Screen
              showCardflow={showCardflow}
              showGame={showGame}
              showMusic={showMusic}
              showSetting={showSetting}
              handleZesture={this.handleZesture}
              handleMenuClick={this.handleMenuClick}
              handleClick={this.handleClick}
            />
          )
        }
      </div>
    );
  }
}

//exporting the component
export default App;

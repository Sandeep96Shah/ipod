import React, { Component } from "react";
import Song from "./music/Song";
import Album from "./music/Album";
import PlayList from "./music/Artist.js.js";
import ZingTouch from "zingtouch";

class Music extends Component {
  constructor() {
    super();

    // initializing the Music state
    this.state = {
      showArtist: false,
      showPlaylist: false,
      showSongs: true,
      showMusicComponent: false,
    };
  }
  // handling the zesture function
  handleZesture = (e) => {
    console.log("state", this.state);

    const context = this;
    var distance = 0;
    var region = new ZingTouch.Region(e.target);
    region.bind(e.target, "rotate", function (e) {
      console.log("last distance details", e.detail.distanceFromLast);
      console.log("rotate details", e.detail.distanceFromOrigin);
      distance = e.detail.distanceFromOrigin;

      // clockWise-direction
      //setting the Songs component as active
      if (distance > 0 && distance < 85) {
        context.setState({
          showSongs: true,
          showArtist: false,
          showPlaylist: false,
        });
      }
      //setting the Artist component as active and
      //Songs component as inactive
      else if (distance > 85 && distance < 177) {
        context.setState({
          showSongs: false,
          showArtist: true,
          showPlaylist: false,
        });
      }
      //setting the PlayList component as active and
      //Artist component as inactive
      else if (distance > 177 && distance < 244) {
        context.setState({
          showPlaylist: true,
          showArtist: false,
        });
      }
      //setting the PlayList component as active and
      else if (distance > 244 && distance < 360) {
        context.setState({
          showPlaylist: true,
          showArtist: false,
          showSongs: false,
        });
      }
      //doing the same anti-Clockwise
      if (distance > -90 && distance < 0) {
        context.setState({
          showArtist: true,
          showPlaylist: false,
          showSongs: false,
        });
      } else if (distance > -168 && distance < -90) {
        context.setState({
          showSongs: true,
          showArtist: false,
        });
      }
    });
  };

  // handling the Enter Click
  handleEnter = () => {
    this.setState({ showMusicComponent: true });
  };

  //handling the Menu Click
  handlemenuClick = () => {
    const { showMusicComponent } = this.state;
    const { handleMenuClick } = this.props;
    if (!showMusicComponent) handleMenuClick();
    else this.setState({ showMusicComponent: false });
  };

  render() {
    {
      /* keeping the state to show the active state and to go to further component */
    }
    const {
      showArtist,
      showMusicComponent,
      showPlaylist,
      showSongs,
    } = this.state;
    return (
      <div>
        {showMusicComponent ? (
          showSongs ? (
            <Song handleMenuClick={this.handlemenuClick} />
          ) : showArtist ? (
            <PlayList handleMenuClick={this.handlemenuClick} />
          ) : (
            <Album handleMenuClick={this.handlemenuClick} />
          )
        ) : (
          <div className="screen">
            <div className="display-music">
              <div className="mini-display">
                <div className="header">Music</div>
                {/* to display the active list */}
                <div className="option">
                  <div className={`list ${showSongs ? "active-btn" : ""}`}>
                    Songs
                  </div>
                  <div className={`list ${showArtist ? "active-btn" : ""}`}>
                    Artist
                  </div>
                  <div className={`list ${showPlaylist ? "active-btn" : ""}`}>
                    Album
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* handling the buttons */}
        <div className="wheel" onClick={this.handleZesture}>
          <button className="home-btn" onClick={this.handlemenuClick}>
            HOME
          </button>
          <button className="enter-btn" onClick={this.handleEnter}>
            ENTER
          </button>
        </div>
      </div>
    );
  }
}

//exporting the component
export default Music;

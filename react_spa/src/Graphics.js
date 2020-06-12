import React, { Component } from "react";
 
class Graphics extends Component {
  render() {
    return (
      <div >
        <ul class="options">
          <h1>Resolution <button class="res">Fullscreen</button><button class="res">Windowless</button><button class="res">Windowed</button>
          </h1>
        </ul>
        <ul></ul>
      </div>
    );
  }
}
 
export default Graphics;
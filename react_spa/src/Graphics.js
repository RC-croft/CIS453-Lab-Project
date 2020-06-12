import React, { Component } from "react";
 
class Graphics extends Component {
  render() {
    return (
      <div >
        <ul class="options">
          <h1>Resolution   <button class="res">Fullscreen</button><button class="res">Windowless</button><button class="res">Windowed</button>
          </h1>
        </ul>
      <ul class="options">
        <h1>Draw Distance <input
    type="range"
    min="10"                    // default 0
    max="1000"                  // default 100
    step="10"                   // default 1
    value="700"                 // default min + (max-min)/2
    data-orientation="vertical" // default horizontal
/></h1></ul>
<ul class="options">
        <h1>Camera FOV <input
    type="range"
    min="10"                    // default 0
    max="1000"                  // default 100
    step="10"                   // default 1
    value="100"                 // default min + (max-min)/2
    data-orientation="vertical" // default horizontal
/></h1></ul>
<ul class="options">
        <h1>Brightness <input
    type="range"
    min="10"                    // default 0
    max="1000"                  // default 100
    step="10"                   // default 1
    value="600"                 // default min + (max-min)/2
    data-orientation="vertical" // default horizontal
/></h1></ul>
<ul class="options">
        <h1>Graphics Quality <input
    type="range"
    min="10"                    // default 0
    max="1000"                  // default 100
    step="10"                   // default 1
    value="500"                 // default min + (max-min)/2
    data-orientation="vertical" // default horizontal
/></h1></ul>
      </div>
    );
  }
}
 
export default Graphics;
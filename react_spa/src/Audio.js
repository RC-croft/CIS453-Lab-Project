import React, { Component } from "react";
 
class Audio extends Component {
  render() {
    return (
      <div>
        
        <ul class="options">
        <h1>Subtitles     <label class="switch">
           <input type="checkbox"/>
            <span class="slider round"></span>
            </label></h1>
        </ul>
        <ul class="options">
        <h1>Language    <select class="inpSelect" name="Languages">
        <option value="0" selected="selected">English</option>
        <option value="1">French</option>
        <option value="2">Chinese</option>
        <option value="3">Spanish</option>
        <option value="4">Japanese</option>
    </select></h1>
        </ul>
        <ul class="options">
        <h1>Voice        <label class="switch">
           <input type="checkbox"/>
            <span class="slider round"></span>
            </label></h1>
        </ul>
        <ul class="options">
        <h1>Audio -temp- <label class="switch">
           <input type="checkbox"/>
            <span class="slider round"></span>
            </label></h1>
        </ul>
   
      </div>
    );
  }
}
 
export default Audio;
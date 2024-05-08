import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg"; 
import { imageData} from './components/DataComponent'; 

class AppClass extends Component {
  render() {
    const imgData = imageData(); 
    const imageElements = [];
    for (let i = 0; i < imgData.length; i++) {
      imageElements.push(
        <img key={imgData[i].id} src={imgData[i].img} alt={imgData[i].id} />
      );
    }
    return (
      <div className="App">
        <h1>Kalvium gallary</h1>
        <div className="image-container">
          {imageElements}
        </div>
      </div>
    );
  }
}

export default AppClass;

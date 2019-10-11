import React, { Component } from "react";
import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.css";

export default class ImageList extends Component {
  render() {
    return (
      <ul className="image-list">
        <div className="image-list--row">
          <ImageListItem text={"React"} img={"react.svg"} height={"150px"} width={"150px"}/>
          <ImageListItem text={"Redux"} img={"redux.png"} height={"150px"} width={"150px"}/>
        </div>

        <div className="image-list--row">
          <ImageListItem text={"Node JS"} img={"node.jpg"} height={"150px"} width={"150px"}/>
          <ImageListItem text={"Mongo DB"} img={"mongo.png"} height={"150px"} width={"150px"}/>
        </div>
      </ul>
    );
  }
}

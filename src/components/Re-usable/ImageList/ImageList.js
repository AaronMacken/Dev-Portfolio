import React, { Component } from "react";
import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.css";

// This component expects to take a prop called listData
// list data is an array of objects that hold the values, name, img and height
// the name is a string value for the title
// the image is a string valuef for the file name of the image that will be used ex. /myImage.jpg
// the height is a string value for how big the image will be, ex. 150px

// it also takes a copy prop
// this copy prop is passed into the ImageListItem component & acts as a boolean which enables the component to copy
// the title text when clicked

export default class ImageList extends Component {
  render() {
    const {listData, copy} = this.props;
    const items = listData.map((passedInProp, index) => {
      return (
        <ImageListItem text={passedInProp.name} img={passedInProp.img} height={passedInProp.height} copy={copy}/>
      )
    })
    return (
      <ul className="image-list">
        <div className="image-list--row">
          {items}
        </div>


      </ul>
    );
  }
}

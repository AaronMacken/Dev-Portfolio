import React, { Component } from "react";
import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.css";

// This component expects to take a prop called listData
// list data is an array of objects that hold the values, name, img and height
// the name is a string value for the title
// the image is a string valuef for the file name of the image that will be used ex. /myImage.jpg
// the height is a string value for how big the image will be, ex. 150px


export default class ImageList extends Component {
  render() {
    const {listData} = this.props;
    const items = listData.map((passedInProp, index) => {
      return (
        <ImageListItem text={passedInProp.name} img={passedInProp.img} height={passedInProp.height}/>
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

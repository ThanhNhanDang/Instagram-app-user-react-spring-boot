import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./InfoSection.css";
import avatar from "../../images/avatar.jpg";

export class InfoSection extends Component {
  render() {
    return (
      <div>
        <div className="info__container">
          <Avatar src={avatar} className="info__image" />
          <div className="info_content">
            <div className="info_username">Thành Nhân</div>
            <div className="info_description">Description</div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSection;

import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./StatusBar.css";
import statusImg1 from "../../images/pp1.png";
import statusImg2 from "../../images/pp2.png";
import statusImg3 from "../../images/pp3.jpeg";
import statusImg4 from "../../images/pp4.jpeg";
import uploadImage from "../../images/statusadd.png";
export class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        username: "user1",
        imageURL: statusImg1,
      },
      {
        username: "user2",
        imageURL: statusImg2,
      },
      {
        username: "user3",
        imageURL: statusImg3,
      },
      {
        username: "user4",
        imageURL: statusImg4,
      },
      {
        username: "user1",
        imageURL: statusImg1,
      },
      {
        username: "user2",
        imageURL: statusImg2,
      },
      {
        username: "user3",
        imageURL: statusImg3,
      },
      {
        username: "user4",
        imageURL: statusImg4,
      },
      {
        username: "user1",
        imageURL: statusImg1,
      },
      {
        username: "user2",
        imageURL: statusImg2,
      },
      {
        username: "user3",
        imageURL: statusImg3,
      },
      {
        username: "user4",
        imageURL: statusImg4,
      },
      {
        username: "user1",
        imageURL: statusImg1,
      },
      {
        username: "user2",
        imageURL: statusImg2,
      },
      {
        username: "user3",
        imageURL: statusImg3,
      },
      {
        username: "user4",
        imageURL: statusImg4,
      },
      {
        username: "user1",
        imageURL: statusImg1,
      },
      {
        username: "user2",
        imageURL: statusImg2,
      },
      {
        username: "user3",
        imageURL: statusImg3,
      },
      {
        username: "user4",
        imageURL: statusImg4,
      },
      {
        username: "user1",
        imageURL: statusImg1,
      },
      {
        username: "user2",
        imageURL: statusImg2,
      },
      {
        username: "user3",
        imageURL: statusImg3,
      },
      {
        username: "user4",
        imageURL: statusImg4,
      },
    ];
    this.setState({ statusList: data });
  };
  render() {
    return (
      <div className="statusbar__container">
        <img alt="uploadImage" className="statusbar__upload" src={uploadImage} width="55px" height="55px"/>
        {this.state.statusList.map((status, index) => (
          <div className="status" key={index}>
            <Avatar className="statusbar__status" src={status.imageURL} />
            <div className="statusbar__text">{status.username}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default StatusBar;

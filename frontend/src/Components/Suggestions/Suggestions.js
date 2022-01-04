import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Suggestions.css";
import statusImg1 from "../../images/pp1.png";
import statusImg2 from "../../images/pp2.png";
import statusImg3 from "../../images/pp3.jpeg";
import statusImg4 from "../../images/pp4.jpeg";
export class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendList: [],
    };
  }

  componentDidMount(){
      this.getFriends();
  }

  getFriends = () => {
    let data = [
      {
        imageURL: statusImg1,
        username: "Friend 1",
      },
      {
        imageURL: statusImg2,
        username: "Friend 2",
      },
      {
        imageURL: statusImg3,
        username: "Friend 3",
      },
      {
        imageURL: statusImg4,
        username: "Friend 4",
      },
    ];
    this.setState({friendList:data})
  };
  render() {
    return (
      <div>
        <div className="suggestions__container">
          <div className="suggestions__header">
            <div>Suggestions For You</div>
          </div>
          <div className="suggestions__body">
              {this.state.friendList.map((friend, index)=>(
                    <div className="suggestions__friends" key={index}>
                    <Avatar className="suggestions__image" src={friend.imageURL} />
              <div className="suggestions__username">{friend.username}</div>
                  </div>
              ))}
          
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;

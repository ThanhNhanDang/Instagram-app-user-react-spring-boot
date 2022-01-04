import React, { Component } from "react";
import Post from "../Post/Post";
import "./MainPage.css";
import statusImg1 from "../../images/pp1.png";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    let data = [
      {
        id: "1234",
        profileImage: statusImg1,
        username: "username 1",
        postImage:
          "https://media.istockphoto.com/photos/beautiful-sunrise-over-the-sea-picture-id610041376?k=20&m=610041376&s=612x612&w=0&h=JoEPWYoq1-FN5ANIQHNNdI2XrRDYnPCUWuLOHMrgLnE=",
        likes: "1242",
      },
      {
        id: "1234",
        profileImage: statusImg1,
        username: "username 1",
        postImage:
          "https://media.istockphoto.com/photos/beautiful-sunrise-over-the-sea-picture-id610041376?k=20&m=610041376&s=612x612&w=0&h=JoEPWYoq1-FN5ANIQHNNdI2XrRDYnPCUWuLOHMrgLnE=",
        likes: "1242",
      },
    ];
    this.setState({ postList: data });
  };

  render() {
    return (
      <div>
        {this.state.postList.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            profileImage={post.profileImage}
            username={post.username}
            postImage={post.postImage}
            likes={post.likes}
          />
        ))}
      </div>
    );
  }
}

export default MainPage;

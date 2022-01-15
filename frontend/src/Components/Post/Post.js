import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Post.css";
import comment from "../../images/comment.svg";
import love from "../../images/love.svg";
import share from "../../images/share.svg";

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    fetch("http://localhost:8081/api/comment/" + this.props.id)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ commentList: data });
      })
      .catch((error) => {});
  };

  submitComments = (event) => {
    if (event.key == "Enter") {
      let comment = event.currentTarget.value;
      if (comment != null || comment != undefined) {
        const payload = {
          commentId: Math.floor(Math.random() * 100000).toString(),
          postId: this.props.id,
          userId: JSON.parse(localStorage.getItem("users")).uid,
          timestamp: new Date().getTime(),
          comment: comment,
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8081/api/comment", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            this.getComments();
          })
          .catch((error) => {});
      }
    }
  };

  render() {
    return (
      <div className="post__container">
        {/* Header */}
        <div className="post__header">
          <Avatar className="post__image" src={this.props.profileImage} />
          <div className="post__username">{this.props.username}</div>
        </div>
        {/* Image */}
        <div>
          <img alt="postImage" src={this.props.postImage} width="615px" />
        </div>
        {/* Analytics */}
        <div>
          <div style={{ marginLeft: "10px" }}>
            <img alt="love" src={love} className="post__reactimage" />
            <img alt="comment" src={comment} className="post__reactimage" />
            <img alt="share" src={share} className="post__reactimage" />
          </div>
        </div>
        <div style={{ fontWeight: "bold", marginLeft: "15px" }}>
          {this.props.likes} likes
        </div>
        {/* Comment Section */}
        <div>
          {this.state.commentList.map((comment, index) =>
            index < 4 ? (
              <div key={comment.id} className="post__comment">
                {comment.userName}: {comment.comment}
              </div>
            ) : (
              <span></span>
            )
          )}

          <input
            className="post__commentbox"
            type="text"
            onKeyPress={this.submitComments}
            placeholder="Add a comment..."
          />
        </div>
      </div>
    );
  }
}

export default Post;

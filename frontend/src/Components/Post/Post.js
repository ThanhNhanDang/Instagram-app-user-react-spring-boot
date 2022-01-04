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
        commentList:[]
    };
  }

  componentDidMount(){
      this.getComments()
  }

  getComments=()=>{
      let data=[
          {
              username:"ADX",
              commentId:"1234",
              timeStamp:"1234",
              description:"Comment 1"
          },
          {
            username:"ADX",
            commentId:"1234",
            timeStamp:"1234",
            description:"Comment 1"
        }
      ]
      this.setState({commentList:data})
  }
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
          <img alt="postImage"src={this.props.postImage} width="615px" />
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
            {this.state.commentList.map((comment, index)=>(
                 <div key={index} className="post__comment">{comment.username}: {comment.description}</div>
            ))}
          
          <input
            className="post__commentbox"
            type="text"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    );
  }
}

export default Post;

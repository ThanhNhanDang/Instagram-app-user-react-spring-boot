import React, { Component } from "react";
import Post from "../Post/Post";
import "./MainPage.css";
import statusImg1 from "../../images/avatar.jpg";
import uploadIcon from "../../images/upload.png";
import { storage, auth } from "../firebase";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      progressBar: "",
    };
  }

  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    const thisContext = this;
    fetch("http://localhost:8081/api/post")
    .then((response) => response.json())
    .then((data) => {
        thisContext.setState({ postList: data });
    })
    .catch((error) => {});
   
  };


  

  upload = (event) => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined) return;
    var uploadTask = storage
      .ref("images")
      .child(image.name)
      .put(image);
    uploadTask.on(
      "state_changed",
      function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        thisContext.setState({ progressBar: progress });
      },
      function(error) {
        console.log(error);
      },
      function() {
        
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          const payload = {
            postId: Math.floor(Math.random() * 100000).toString(),
            path: downloadURL,
            userId: JSON.parse(localStorage.getItem("users")).uid,
            timestamp: new Date().getTime(),
            likeCount: 0,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:8081/api/post", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              thisContext.getPosts();
            })
            .catch((error) => {});
        });
      }
    );
  };

  render() {
    return (
      <div>
        <div className="mainpage__container">
          <div className="mainpage__divider"></div>
          <div className="fileupload">
            <label for="file-upload">
              <img
                className="mainpage__uploadicon"
                alt="upload"
                src={uploadIcon}
              />
            </label>
            <input onChange={this.upload} id="file-upload" type="file"></input>
          </div>
          <div className="mainpage__divider"></div>
        </div>

        <div className="upload_text">{this.state.progressBar}</div>
        <div>
          {this.state.postList.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              profileImage={statusImg1}
              username={post.userName}
              postImage={post.path}
              likes={post.likeCount}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import Comment from "./Comment";
import "./comments.css";

export default function Comments({ post, path }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useContext(Context);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get("/comments/" + path, {});
      setComments(response.data);
    };
    getComments();
  }, [path]);

 const handleSubmit = async (event) => {
     event.preventDefault();
     const newComment = {
       postId: post._id,
       name: user.username,
       comments: comment
     };
    try {
      await axios.post("/comments", newComment);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="commentInputWrapper">
        <div className="commentInputContainer">
          <img
            className="commentImage"
            src={
              "https://i1.wp.com/dl.img-news.com/dl/img/s4/dl/2020/10/Who-is-Kerem-Bursin-where-is-he-from-What-is.img.jpeg?w=696&ssl=1"
            }
            alt="dp"
          />
          <form onSubmit={handleSubmit}>
            <textarea
              className="commentDescInput"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="What's on your mind?"
              rows={5}
            ></textarea>
            <button className="commentButtonPost" type="submit">Post</button>
          </form>
        </div>
      </div>
      <div className="comments">
        {comments && comments.map((comment) => <Comment comment={comment} />)}
      </div>
    </>
  );
}

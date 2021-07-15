import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
}

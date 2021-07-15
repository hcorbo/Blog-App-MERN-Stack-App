import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo ? (
        <img className="postImg" src={PF + post.photo} alt="post_image" />
      ) : (
        <img
          className="postImg"
          src="https://i.imgur.com/sjDBHUW.png"
          alt="post_image"
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <Link
              key={category._id}
              className="link"
              to={`/?cat=${category}`}
            >
              <span className="postCat">
                {category}
              </span>
            </Link>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}

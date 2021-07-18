import React from "react";
import { Link } from "react-router-dom";
import "./comment.css";
export default function Comment({ comment }) {
  return (
    <div className="commentWrapper">
      <div className="commentInfo">
      <img className="commentImage" src={"https://i1.wp.com/dl.img-news.com/dl/img/s4/dl/2020/10/Who-is-Kerem-Bursin-where-is-he-from-What-is.img.jpeg?w=696&ssl=1"} alt="dp" />   
        <span className="commentInfoOne">
          Author:
          <b className="commentAuthor">
            <Link className="link" to={`/?user=${comment.name}`}>
              {comment.name}
            </Link>
          </b>
        </span>
        <span className="commentDate">{new Date(comment.createdAt).toDateString()}</span>
      </div>
      <p className="commentDesc">{comment.comments}</p>
    </div>
  );
}

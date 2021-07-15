import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const {user} = useContext(Context)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts" + search);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {user && (
          <>
            <Posts posts={posts} />
            <Sidebar />
          </>
        )}
      </div>
    </>
  );
}

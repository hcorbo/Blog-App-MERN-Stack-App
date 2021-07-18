import React, { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("/categories");
      console.log(response.data);
      setCategories(response.data);
    };
    getCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={PF + user.profilePicture} alt="" />
        <p>
          I'm a Turkish programmer.
          If you are interested, you can view some of my blogs.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <div className="sidebarList">
          {categories.map((category) => {
            return (
              <Link
                key={category._id}
                className="link"
                to={`/?cat=${category.name}`}
              >
                <div className="sidebarListItem">{category.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarListIcons">
          <FaFacebookSquare className="sidebarListIcon" />
          <FaInstagramSquare className="sidebarListIcon" />
          <FaTwitterSquare className="sidebarListIcon" />
        </div>
      </div>
    </div>
  );
}

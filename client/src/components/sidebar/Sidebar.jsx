import React, { useEffect, useState } from "react";
import "./sidebar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

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
        <img
          className="sidebarImg"
          src="https://i.pinimg.com/originals/da/66/ab/da66ab7daf962a1962a9695e423b25e1.jpg"
          alt=""
        />
        <p>Ovo je neki tekst za probu</p>
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

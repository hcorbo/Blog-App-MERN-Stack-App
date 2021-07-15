import React, { useContext } from "react";
import "./topbar.css";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top-bar">
      <div className="topLeft">
        <h1>BLOG</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="topListItem">
              <Link className="link" to="/register" onClick={handleLogout}>
                LOGOUT
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          user.profilePicture ? (
            <Link to="/settings">
              <img
                className="topImage"
                src={PF + user.profilePicture}
                alt="https://i.pinimg.com/originals/42/6c/54/426c54e61739e2661760fa3d28c708c3.jpg"
              />
            </Link>
          ) : (
            <Link className="link" to="/settings">
              <img
                className="topImage"
                src="https://e7.pngegg.com/pngimages/393/995/png-clipart-aspria-fitness-computer-icons-user-my-account-icon-miscellaneous-monochrome.png"
                alt=""
              />
            </Link>
          )
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <MdSearch className="topSearchIcon" />
      </div>
    </div>
  );
}

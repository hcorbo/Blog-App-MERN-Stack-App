import React, { useContext } from "react";
import "./contact.css";
import { Context } from "../../context/Context";

export default function Contact() {
  const { user } = useContext(Context);

  return (
    <div class="contact">
      <div class="contactContainer">
        <div class="contactRow">
          <div class="card-shadow">
            <img
              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
              class="contactImg"
              alt="contactImg"
            />
          </div>
          <div class="contact-box">
            <div className="contactWrapper">
              <div className="contactTitle">Contact Us</div>
              <form className="contactForm">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  name="name"
                  //onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder={user.email}
                  name="email"
                  //onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+38762010101"
                  name="phone"
                  //onChange={(e) => setPhone(e.target.value)}
                />
                <label>Message</label>
                <textarea rows="3" placeholder="How can we help?"></textarea>
                <button className="settingsSubmitButton" type="submit">
                  Send
                </button>
                {/* {success && (
                      <span
                        style={{
                          color: "green",
                          textAlign: "center",
                          marginTop: "20px",
                        }}
                      >
                        Profile has been updated...
                      </span>
                    )} */}
              </form>
            </div>
          </div>
        </div>
        <div class="contactInfoContainer">
          <div class="contactInfoItem">
            <img
              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
              alt="contactAddress"
            />
            <div class="contactInfoDesc">
              <h4 class="font-weight-medium">Address</h4>
              <p class="">
                601 Sherwood Ave.
                <br /> San Bernandino
              </p>
            </div>
          </div>

          <div class="contactInfoItem">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" 
              alt= "contactPhone"/>
            <div class="contactInfoDesc">
              <h4 class="font-weight-medium">Phone</h4>
              <p class="">
                251 546 9442
                <br /> 630 446 8851
              </p>
            </div>
          </div>
          <div class="contactInfoItem">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" 
              alt= "contactEmail" />
            <div class="contactInfoDesc">
              <h4 class="font-weight-medium">Email</h4>
              <p class="">
                info@wrappixel.com
                <br /> 123@wrappixel.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

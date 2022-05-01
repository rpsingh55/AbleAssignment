import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/AboutStyle.css";

const About = () => {
  return (
    <>
      <div className="login-box">
        <h2>About</h2>
        <form>
          <div className="user-box">
            <input type="text" name="name" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="email" name="email" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="phone" required="" />
            <label>Phone number</label>
          </div>
          <div className="user-box">
            <p>Job Role</p>
            <select id="sel">
              <option value="BussinessDevelopment">
                Bussiness Development
              </option>
              <option value="InsideSales">Inside Sales</option>
              <option value="ContentWriting">Content Writing</option>
              <option value="Digital Writing">Digital Writing</option>
            </select>
          </div>
          <div className="user-box">
            <input type="" required="" />
            <label>Job Description</label>
          </div>
          <div className="user-box">
            <input type="textarea" name="" required="" />
            <label>Place of Work</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default About;

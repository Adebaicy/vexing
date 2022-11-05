import React from "react";
import "./App.css";
import "./contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className="cen">
        <h1>Contact Me</h1>

        <p id="hi">
          Hi there, contact me to ask me about anything you have in mind
        </p>

        
        <form >
          <div>
            <div className="tt">
              <div className="top">
                <label htmlFor="first_name" className="form-label">First name</label>
                <br />
                <input
                
                className="form-control"
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                ></input>
                
                <br />
                <span><br /></span>
              </div>

              <div className="top">
                <label htmlFor="last_name">Last name</label>
                <br />
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                ></input>
              </div>
            </div>
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="yourname@email.com"
              id="email"
            ></input>
            <br />
            <br />

            <label htmlFor="message">Message</label>
            <br />
            <textarea required className="form-control"
              id=" message"
              placeholder="Send me a message and I'll reply as soon as possible..."
            ></textarea>
            <div className="valid-feedback">Please, enter a message</div>
          </div>
          <br />

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              You agree to providing your data to Adebaicy who may contact you
            </label>
          </div>


          <br />
          <button type="submit" id="sendit">
            Send message
          </button>
        </form>
      </div>
      <div className="hor">
        <hr />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

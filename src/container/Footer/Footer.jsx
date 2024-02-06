import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const resumeLink = import.meta.env.VITE_REACT_APP_RESUME_LINK

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Get in Touch with Me</h2>

      <div className="app__footer-cards">
        <a
          href="mailto:vatsalbalasra24@gmail.com"
          className="app__footer-card no-decor"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          <img src={images.emailSvg} alt="email" />
          <div className="p-text">Directly Mail Me</div>
        </a>
        <a
          href="tel:+91 9352467478"
          className="app__footer-card no-decor"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          <img src={images.mobile} alt="phone" />
          <div className="p-text">Phone Number</div>
        </a>
        <a
          href="https://www.linkedin.com/in/balasra-vatsal/"
          className="app__footer-card no-decor"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          <img src={images.linkedin} alt="LinkedIn" />
          <div className="p-text">LinkedIn</div>
        </a>
        <a
          href = {resumeLink}
          className="app__footer-card no-decor"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          <img src={images.resume} alt="Resume" />
          <div className="p-text">My Resume</div>
        </a>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

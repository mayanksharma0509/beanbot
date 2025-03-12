import React, { useState } from "react";


const Contact = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    if (e.target.value.length <= 1000) {
      setComment(e.target.value);
    }
  };

  return (
    <div className="mainbg">

    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input
          className="email-input"
          type="email"
          placeholder="Enter your email"
          required
          />
        <textarea
          className="comment-box"
          placeholder="Write your comment here... (Max 1000 characters)"
          value={comment}
          onChange={handleCommentChange}
          maxLength={1000}
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
          </div>
  );
};

export default Contact;

import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h1>Get Excluive Offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your Email id..." />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter

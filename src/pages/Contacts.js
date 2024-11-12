import React from "react";
import './Contacts.css';
function Contacts(){
    return(
        <div className="contact">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
  
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
  
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
  
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
  
            <button type="submit">Send Message</button>
          </form>
        </div>
  
        <div className="social-media">
          <p>Follow us on social media:</p>
          <a href="#"target="_blank" className="social-link">Facebook</a>
          <a href="#" target="_blank"className="social-link">Instagram</a>
          <a href="#"target="_blank" className="social-link">Twitter</a>
          <a href="#" target="_blank" className="social-link">Whatsapp</a>
        </div>
      </div>
    );
}

export default Contacts;
import React from "react";
import './Contacts.css';
function Contacts(){
    return(
        <div className="contact">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
  
        <div className="contact-form">
          <form action="contact.php" method="POST">
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
          <a href="https://mail.google.com/ochiengbrayan55@gmail.com"target="_blank" className="social-link">Email us</a>
          <a href="https://www.instagram.com/briannoah82" target="_blank"className="social-link">Instagram</a>
          <a href="https://www.twitter.com/@BrayanOchi73795"target="_blank" className="social-link">Twitter</a>
          <a href="https://wa.me/0701867245" target="_blank" className="social-link">Whatsapp</a>
        </div>
      </div>
    );
}

export default Contacts;
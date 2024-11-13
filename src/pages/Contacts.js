import React ,{useState} from "react";
import './Contacts.css';
function Contacts(){
  const [ formData,setFormData]=useState({
    name:'',
    email:'',
    message:''

  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit=async (e)=> {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error. Please try again.');
    }
  };
    return(
        <div className="contact">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
  
        <div className="contact-form">
          <form  onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
  
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  value={formData.email} onChange={handleChange} required />
  
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
  
            <button type="submit">Send Message</button>
          </form>
        </div>
  
        <div className="social-media">
          <p>Follow us on social media:</p>
          <a href="mailto:ochiengbrayan55@gmail.com"target="_blank" className="social-link">Email us</a>
          <a href="https://www.instagram.com/briannoah82" target="_blank"className="social-link">Instagram</a>
          <a href="https://www.twitter.com/@BrayanOchi73795"target="_blank" className="social-link">Twitter</a>
          <a href="https://wa.me/0701867245" target="_blank" className="social-link">Whatsapp</a>
        </div>
      </div>
    );
}

export default Contacts;
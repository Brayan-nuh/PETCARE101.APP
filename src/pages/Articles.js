import React from "react";
import './Articles.css';
function Articles(){
    return(
        <div className="articles">
      <h1>Petcare Articles</h1>
      <p>Discover expert tips, advice, and information on all things pet-related. Browse through our selection of articles to help you keep your pets happy and healthy.</p>

      <div className="article-list">
        <div className="article-card">
          <h2>Understanding Pet Nutrition</h2>
          <p>Learn about the essentials of pet nutrition and how to provide a balanced diet for your furry friends.</p>
          <a href="#">Read More</a>
        </div>
        <div className="article-card">
          <h2>Grooming Tips for Your Pets</h2>
          <p>Explore our top grooming tips to keep your pets looking great and feeling comfortable year-round.</p>
          <a href="#">Read More</a>
        </div>
        <div className="article-card">
          <h2>Training Basics for New Pet Owners</h2>
          <p>Find effective training techniques to help new pet owners manage behavior and create a loving bond with their pets.</p>
          <a href="#">Read More</a>
        </div>
        <div className="article-card">
          <h2>Common Pet Health Issues</h2>
          <p>Understand common health issues in pets and how to recognize early signs for better care.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>

    );
}
export default Articles;
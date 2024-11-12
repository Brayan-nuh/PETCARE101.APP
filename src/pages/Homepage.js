import React from "react";
import '/.home.css';
function Home(){
    return(
        <div className="home">
        <section className="welcome">
          <h1>Welcome to Petcare 101</h1>
          <p>Your ultimate resource for expert pet care tips, guidance, and inspiration. At Petcare 101, we are here to help you give your pets the best life possible.</p>
        </section>
        
        <section className="features">
          <div className="feature">
            <h2>Comprehensive Articles</h2>
            <p>Explore our collection of well-researched articles on pet health, nutrition, grooming, and training to keep your furry friends happy and healthy.</p>
          </div>
          <div className="feature">
            <h2>Expert Advice</h2>
            <p>Learn from veterinarians and experienced pet owners who share valuable insights and practical tips for pet care.</p>
          </div>
          <div className="feature">
            <h2>Community Support</h2>
            <p>Connect with fellow pet lovers, ask questions, and share your own pet care experiences to grow as a pet parent.</p>
          </div>
        </section>
      </div>

    );
}
export default Home;
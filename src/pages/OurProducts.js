import React from "react";
import './OurProducts.css';
function OurProducts (){
    const OurProducts=[
       {
        id: 1,
      name: 'Premium Dog Food',
      description: 'Nutritious and delicious dog food for all breeds.',
      price: '200',
      image: require('../assets/images/pedigree adult.jfif')

       },
       {
        id: 2,
      name: 'Cat Scratching Post',
      description: 'Durable scratching post to keep your cat entertained.',
      price: '50',
      image: require('../assets/images/cat toy.jfif')
       },
       {
        id: 3,
        name: 'Pet Grooming Kit',
        description: 'Complete grooming kit to keep your pets looking their best.',
        price: '600',
        image: require('../assets/images/pet shampoo.jfif')
       },


    ];
    const handleBuy = async (amount) => {
  const phone = prompt("Enter your MPesa number (format: 2547XXXXXXXX)");

  if (!phone || phone.length < 10) {
    alert("Invalid phone number.");
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/stkpush', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, amount })
    });

    const data = await response.json();
    console.log('MPesa Response:', data);
    alert("Payment request sent. Check your phone to complete the payment.");
  } catch (error) {
    console.error('Error sending payment:', error);
    alert("Payment failed. Try again.");
  }
};


    return (
        <div className="products">
      <h1>Our Products</h1>
      <p>Discover our range of pet products, carefully selected for your furry friends. Shop now and give them the best!</p>
       
        
      <a href="https://petcare101.com" target="_blank" rel="noopener noreferrer">
        <button className="shop-now-button">Visit Petcare 101</button>
      </a>

      <div className="product-list">
        {OurProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="buy-button" onClick={() => handleBuy(product.price)}>Buy Now</button>

          </div>
        ))}
      </div>
    </div>
    );
}
export default OurProducts;
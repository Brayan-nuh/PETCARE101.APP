import React from "react";
import './OurProducts.css';
function OurProducts (){
    const OurProducts=[
       {
        id: 1,
      name: 'Premium Dog Food',
      description: 'Nutritious and delicious dog food for all breeds.',
      price: '$20',
      image: 'pedigree adult.jfif'

       },
       {
        id: 2,
      name: 'Cat Scratching Post',
      description: 'Durable scratching post to keep your cat entertained.',
      price: '$15',
      image: 'path-to-your-image2.jpg'
       },
       {
        id: 3,
        name: 'Pet Grooming Kit',
        description: 'Complete grooming kit to keep your pets looking their best.',
        price: '$30',
        image: 'path-to-your-image3.jpg'
       },


    ];
    return (
        <div className="products">
      <h1>Our Products</h1>
      <p>Discover our range of pet products, carefully selected for your furry friends. Shop now and give them the best!</p>

      <div className="product-list">
        {OurProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    );
}
export default OurProducts;
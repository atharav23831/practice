import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    description: 'A low-maintenance indoor plant that improves your space.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee'
  },
  {
    id: 2,
    name: 'Peace Lily',
    description: 'An elegant plant with beautiful green leaves.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee'
  },
  {
    id: 3,
    name: 'Aloe Vera',
    description: 'A popular succulent that is easy to care for.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09'
  },
  {
    id: 4,
    name: 'Monstera',
    description: 'A tropical plant known for its unique split leaves.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b'
  },
  {
    id: 5,
    name: 'Areca Palm',
    description: 'A decorative palm that adds greenery to your home.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78'
  },
  {
    id: 6,
    name: 'Jade Plant',
    description: 'A compact succulent suitable for desks and windowsills.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list" id="products">
      <h1>Our Plants</h1>
      <p>Bring nature home with Paradise Nursery.</p>

      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="product-image"
            />

            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <h3>₹{plant.price}</h3>

            <button
              onClick={() => handleAddToCart(plant)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

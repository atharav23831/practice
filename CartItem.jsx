import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is empty. Explore our plants and add your favorites!</p>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>

      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Price: ₹{item.price}</p>
              <p>
                Subtotal: ₹{item.price * item.quantity}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="remove-item-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₹{totalAmount}</h2>
        <button
          onClick={() => alert('Thank you for shopping with Paradise Nursery!')}
          className="checkout-btn"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;

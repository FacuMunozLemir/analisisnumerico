import React, { useState } from "react";
import "./styles.css";

const Menu = () => {
  const [menu, setMenu] = useState([
    { name: "Ensalada César", price: 10 },
    { name: "Sopa de pollo", price: 8 },
    { name: "Pasta Alfredo", price: 12 },
    { name: "Filete Mignon", price: 25 },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem !== item));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="menu-container">
      <div className="menu">
        <h2>Menú</h2>
        {menu.map((item, index) => (
          <div className="menu-item" key={index}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Carrito de compras</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => handleRemoveFromCart(item)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="total">
          <p>Total:</p>
          <p>${total}</p>
        </div>
        <button className="checkout-button">Pagar</button>
      </div>
    </div>
  );
};

export default Menu;

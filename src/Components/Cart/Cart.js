import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cartInfo
    let salary = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        salary = salary + element.salary;

    }
    return (
        <div className="cart">
            <h2>Total user added: {cart.length}</h2>
            <h3>Total salary: ${salary}</h3>
        </div>
    );
};

export default Cart;
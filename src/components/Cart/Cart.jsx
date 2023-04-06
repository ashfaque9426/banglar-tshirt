import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <>
            <h2>Order Summery: {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </>
    );
};

export default Cart;
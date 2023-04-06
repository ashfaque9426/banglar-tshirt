import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exits = cart.find(ts => ts._id === tshirt._id);
        if(exits) {
            toast('You have Already Added this tshirt');
            return;
        }
        const newCart = [...cart, tshirt]
        setCart(newCart);
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }

    return (
        <main role='main'>
            <h2>TShirts: {tshirts.length}</h2>
            <div className='home-container'>
                <section className='tshirts-container'>
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}  />)
                }
            </section>
            <aside className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
            </aside>
            </div>
        </main>
    );
};

export default Home;
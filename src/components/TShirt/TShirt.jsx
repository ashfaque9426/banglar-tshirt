import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {_id: id, picture, name, price } = tshirt;
    return (
        <article className='t-shirt'>
            <img src={picture} alt={name + " Image"} />
            <section>
                <h3>{name}</h3>
                <p>Price: {price}</p>
            </section>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
        </article>
    );
};

export default TShirt;
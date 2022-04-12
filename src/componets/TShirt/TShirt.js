import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const {handleaddToCart,shirt} = props
    const {picture,name,price} = shirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name : {name}</h4>
            <p>Price : ${price}</p>
            <button className='delete'onClick={() => handleaddToCart(shirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;
import React from 'react';
import './Cart.css'

const Cart = ({ cart,handleRemoveToCart }) => {
    // conditional rendering 
    // 1 : variable condition
    // 2 : ternary operator condition  true : false
    // 3 : && operator
    // 4 : || operator

    let command;
    if(cart.length === 0 ){
        command = <div>
            <p>Kisu Taka Khorcha Koren!!</p>
            <p>Ato Taka Diya Ki Korben!!</p>
        </div>
    }
    else if(cart.length === 1 ){
        command = <div>
            <p>Kipta R Kisu Kinle Ki Hobe!!</p>
            <p>Aha Sona Go Amr!!</p>
        </div>
    }
    else{
        command = <div>
            <p>Thanks Apnak Ato Kisu Kinar Jonno!!</p>
            <p>Ja Vag Akhan Thaika!!</p>
        </div>
    }
    return (
        <div>
            <h1>Selected Items : {cart.length}</h1>
            {
                cart.map(tShirt =>
                    <p>
                        {tShirt.name}
                        <button onClick={() => handleRemoveToCart(tShirt)} className='delete'>Delete</button>
                    </p>
                )
            }
            {command}
            {
                cart.length === 3 && <div className='delete'>
                    <p>Wow You Selected Three items</p>
                    <p>THANKS !!</p>
                    </div>
            }
            {
                cart.length === 0 || <div className='delete'>
                    <p>YAY Your R BuyIng!!</p >
                    
                    </div>
            }
            {cart.length !== 4 ? <p>Kip Adding</p> : <button className='delete'>Remove All</button>}
            {
                cart.length === 4 && <button className='delete'>DeLeTe AlL</button>
            }
        </div>
    );
};

export default Cart;
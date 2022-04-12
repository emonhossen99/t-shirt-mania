import React, { useState } from 'react';
import useTShirt from '../../CustomHooks/TShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
   const [shirt] = useTShirt();
   const [cart,setCart] = useState([])

   const handleaddToCart = product => {
       const exiest = cart.find(item => item._id === product._id)
       if(!exiest){
        const newCart = [...cart,product]
        setCart(newCart);
       }
       else{
           alert("This Product All Ready Added")
       }
   }
   const handleRemoveToCart = products => {
    const rest = cart.filter(product =>  product._id !== products._id)
    setCart(rest)
   }
   
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                  {
                      shirt.map(sh => <TShirt 
                        shirt={sh}
                        key={sh._id}
                        handleaddToCart={handleaddToCart}
                        ></TShirt>)
                  }
            </div>
            <div className='cart-container'>
                <Cart
                handleRemoveToCart={handleRemoveToCart}
                cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;
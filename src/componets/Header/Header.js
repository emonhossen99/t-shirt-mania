import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome To My T-shirt Mania !!</h1>
            <nav className='header'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderreview">Order-Review</CustomLink>
                <CustomLink to="/grandpa">GrandPa</CustomLink>
            </nav>
            
        </div>
    );
};

export default Header;
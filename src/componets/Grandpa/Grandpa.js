import React, { createContext, useState } from 'react';
import Ancle from '../Ancle/Ancle';
import Father from '../Father/Father';
import Untiy from '../Untiy/Untiy';
import './Grandpa.css'

export const RingContext = createContext('ring')

const Grandpa = () => {

    const [house, setHouse] = useState(1)

    const handelCount = () => {
        const newCount = house + 1;
        setHouse(newCount)
    }
    const ornament = 'Daimoned Ring'
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h1>GrandPa</h1>
                <button onClick={handelCount}>House_Count</button>
                <p>House : {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Ancle house={house}></Ancle>
                    <Untiy house={house}></Untiy>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;
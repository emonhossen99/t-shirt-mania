import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spacial = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>Special Person</h2>
            <p>Gift : {house}</p>
            <button onClick={() => setHouse(house + 1)}>Added</button>
        </div>
    );
};

export default Spacial;
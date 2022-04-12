import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Untiy = () => {
    const [house, setHouse] = useContext(RingContext);

    const handleAddToHome = () =>{
        const newHome = house + 1;
        setHouse(newHome)
    }
    return (
        <div>
            <h3>Untiy</h3>
            <p>House : {house}</p>
            <button onClick={handleAddToHome}>Added</button>
        </div>
    );
};

export default Untiy;
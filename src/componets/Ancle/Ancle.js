import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Ancle = ({house}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Ancle</h3>
            <p>House : {house}</p>
            <p>Gift : {ring}</p>
        </div>
    );
};

export default Ancle;
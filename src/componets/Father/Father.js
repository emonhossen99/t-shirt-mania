import React from 'react';
import Brother from '../Brother/Brother';
import MyShelf from '../MyShlef/MyShelf';
import Sister from '../Sister/Sister';

const Father = ({house,ornament}) => {
    return (
        <div>
            <h3>Father</h3>
            <p>House : {house}</p>
            <div style={{display: 'flex'}}> 
            <MyShelf house={house} ></MyShelf>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;
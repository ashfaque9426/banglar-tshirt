import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>I am aunty component</h2>
            {angti}
        </div>
    );
};

export default Aunty;
import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Father = () => {
    const [money] =  useContext(MoneyContext);
    return (
        <div>
            <h2>I am father component</h2>
            <p><small>Grandpa Money: {money}</small></p>
        </div>
    );
};

export default Father;
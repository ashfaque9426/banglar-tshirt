import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>I am uncle component</h2>
            <p><small>Grandpa Money: {money}</small></p>
            <button onClick={()=> setMoney(money + 1000)}>Send Money</button>
        </div>
    );
};

export default Uncle;
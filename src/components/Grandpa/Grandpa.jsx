import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);
    
    return (
        <main role='main'>
            <h1>Passing data without pros drilling using context api</h1>
            <h2>Grandpa</h2>
            
            <p>Has Money: {money}</p>
            {/* <RingContext.Provider value='golden ring'>
                <section>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </RingContext.Provider> */}
            <MoneyContext.Provider value={[money, setMoney]}>
                <section>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </MoneyContext.Provider>
        </main>
    );
};

export default Grandpa;
import React, { useContext } from 'react';
import CounterContext from './CounterContext'
const Child = () => {
    let counterValue = useContext(CounterContext);
    console.log(counterValue)

    return ( <
        >
        <
        h1 > this is first Child context api < /h1> <
        h4 > counter value is: { counterValue[0] } < /h4> <
        button onClick = {
            () => { counterValue[1](++counterValue[0]) }
        } > increament < /button>

        <
        />
    )
}
export default Child
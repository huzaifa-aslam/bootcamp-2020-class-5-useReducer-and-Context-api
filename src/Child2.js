import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'
const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1)
    return (

        <
        div >

        <
        h1 > this is child 2 useRecucer < /h1> <
        h4 > value of reducer state is: { state } < /h4> <
        button onClick = {
            () => { dispatch('INCREMENT') } } > Reducer < /button> <
        /div>
    )
}
export default Child2;
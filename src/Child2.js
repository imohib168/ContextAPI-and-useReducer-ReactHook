import React, { useReducer } from 'react'
import numberReducer from './numberReducer.js'

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 0)
    return (
        <div className="Child2">
            2<sup>nd</sup> Child (with useReducer hook): {state} <br />
            <button onClick={() => { dispatch({ type: "INCREMENT", val: 1 }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "DECREMENT", val: 1 }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: "MULTIPLY", val: 3 }) }}>Multiply By 3</button>
            <button onClick={() => { dispatch({ type: "DEFAULT" }) }}>Set to Default</button>
        </div>
    )
}

export default Child2

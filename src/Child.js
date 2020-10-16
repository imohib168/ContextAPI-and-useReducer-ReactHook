import React, {useContext} from 'react'
import ValueContext from './ValueContext.js'

function Child() {
    const context = useContext(ValueContext);
    let contextNumber = context[0];
    let updateContext = context[1]
    return (
        <div>
            Child Component Value = {contextNumber} <br/>
            <button onClick={()=>{updateContext(++contextNumber)}}>Increment Context Value</button>
            <button onClick={()=>{updateContext(--contextNumber)}}>Decrement Context Value</button>
        </div>
    )
}

export default Child

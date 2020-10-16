import React from 'react'
import Child from './Child.js'

function parent(props) {
    return (
        <div>
            Parent: {props.num}
            <Child num={props.num}/>
        </div>
    )
}

export default parent;

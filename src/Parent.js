import React from 'react'
import Child from './Child'
import Child2 from './Child2'

function Parent() {
    return (
        <div className="Parent">
            Parent Component
            <Child />
            <Child2 />
        </div>
    )
}

export default Parent

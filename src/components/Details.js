import React from 'react'

function Detail(props) {
    return (
        <div>
            <h1>Hello world</h1>
            <h2>Today we serve {props.name}</h2>
            <h3>And the sweet dish is {props.sweet}</h3>
        </div>
    )
}
export default Detail
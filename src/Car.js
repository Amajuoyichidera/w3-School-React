import React from 'react'

function Car(props) {
  return (
    <div>
        <h2>I am a {props.color} {props.brand} {props.brand2.model} Car</h2>
        <button onClick={props.click}>Shoot</button>
    </div>
  )
}

export default Car
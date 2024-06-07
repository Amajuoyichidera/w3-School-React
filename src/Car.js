import React from 'react';
import { useState } from 'react';

function MissedGoal() {
    return <h1>MISSED!</h1>
}

function MadeGoal() {
    return <>
    <h1>GOAL!!</h1>
    <p>Suiiiiiiiiii</p>
    </>
}
function Car(props) {
    const goal = props.goal;
    const car = props.cars;

    const [name, setName] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        alert(`the name you entered was: ${name}`);
        setName('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </form>
        {props.cars}
        {
          car.length > 0 && <p>You have {car.length} cars in your garage</p>
        }
        <h2>I am a {props.color} {props.brand}  Car</h2>
        <button onClick={props.click}>Shoot</button>
        {goal ? <MadeGoal /> : <MissedGoal />}
    </div>
  )
}

export default Car
import React from 'react'
import getMessage from '../message'
import Car from '../Car'

function Code () {
    return <p>I Love Coding</p>
  }

const Blog = () => {
   const myArray = [ 'apple', 'paw-paw', 'orange', 'banana', 'cucumber'];
   function calculate(a, b) {
    let sum = a + b;
    let multiply = a * b;
    let division = a / b;

    return [sum, multiply, division];
   }

   const [sum, multiply, division] = calculate(7, 9);

   const myVehicle = {
    name: 'Lamborghini',
    year: 2024,
    color: 'Black',
   }

    const message = 'i drive a ' + myVehicle.color + ' ' + myVehicle.year + ' ' + myVehicle.name;

    // spread operator with array and object
    const numberOne = [1, 2, 3];
    const numberTwo = [4, 5, 6];
    const combined = [...numberOne, ...numberTwo];
    const [one, two] = combined;

    const aboutMe = {
      name: 'David',
      occupation: 'Software Engineer',
      age: 20,
    }

    const aboutMe2 = {
      degree: 'Bachelor of science',
      course: 'Computer Science',
    }

    const allAboutMe = {...aboutMe, ...aboutMe2}

     let myColor = 'blue';

     const carInfo = {
      model: 'Mustang'
     }

     const shoot = (a) => {
      alert(a)
     }

     const car = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];

  return (
    <div>
         {myArray.map((item) => 
        <p style={{ color: myColor === 'black' ? 'black' : 'brown'}}>{item}</p>
       )}
       <p>{getMessage()}</p>
       <p>{allAboutMe.name}</p>
       <p>{allAboutMe.age === 20 ? 30 : 20}</p>
       <p>{one}</p>
       <p>{two}</p>
       <p>{combined}</p>
       <p>{message}</p>
      <h1>Hello World!</h1>
      <p>Time to code</p>
      <p>{sum}</p>
      <p>{multiply}</p>
      <p>{division}</p>
      <Code />
      <Car cars={car.map((item) => <li key={item.id}>{item.brand}</li>)} goal={true} brand='ford' color='Yellow' brand2 = {carInfo} click={() => shoot('Goal!!!!')} />
    </div>
  )
}

export default Blog
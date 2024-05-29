import getMessage from './message.js'

function App() {
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
    const [one, two, ...others] = combined;

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
  return (
    <div className="App">
      {myArray.map((item) => 
        <p>{item}</p>
       )}
       <p>{getMessage()}</p>
       <p>{allAboutMe.age}</p>
       <p>{one}</p>
       <p>{two}</p>
       <p>{combined}</p>
       <p>{message}</p>
      <h1>Hello World!</h1>
      <p>Time to code</p>
      <p>{sum}</p>
      <p>{multiply}</p>
      <p>{division}</p>
    </div>
  );
}

export default App;

function App() {
  const myArray = [ 'apple', 'paw-paw', 'orange', 'banana', 'cucumber'];
  function calculate(param) {
    
  }
  return (
    <div className="App">
      {myArray.map((item) => 
        <p>{item}</p>
       )}
      <h1>Hello World!</h1>
      <p>Time to code</p>
    </div>
  );
}

export default App;

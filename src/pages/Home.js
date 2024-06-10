import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('Red');
    const [dream, setDream] = useState({
        career: 'Software Engineer',
        country: 'Germany',
        carBrand: 'Mercedes',
        wife: 'beaulah',
    })

    const [inputValue, setInputValue] = useState(dream.wife);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        setDream((prev) => ({
            ...prev,
            wife: inputValue
        }))
        setInputValue('')
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((initialCount) => initialCount += 1)
        }, 1000)

        // return () => clearTimeout(timer)
    },[])

  

  return (
    <div>
        <h3>{count}</h3>
        <input placeholder='enter name' value={inputValue} onChange={handleChange} />
        <button onClick={handleClick}>enter</button>
        <h3>My Name is David and i dream of becoming a world class {dream.career} in {dream.country} with my {dream.wife} in my {dream.carBrand}.</h3>
        <h3 style={{color: color}}>My Best Color is {color} !!</h3>

        <p>Click any button to change my color</p>
        <button onClick={() => setColor('blue')}>Blue</button>
        <button onClick={() => setColor('purple')}>Purple</button>
        <button onClick={() => setColor('brown')}>Brown</button>
        <button onClick={() => setColor('pink')}>Pink</button>
    </div>
  )
}

export default Home
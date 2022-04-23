import { useState } from 'react';
import './App.css';


function App() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)
  const [guess, setGuess] = useState((Math.floor(Math.random() * (max - min + 1) + min)))
  const handelRandomNumber = () => {
    setGuess(Math.floor(Math.random() * (max - min + 1) + min))
  }

  return (


    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number <span>{guess}</span> </p>

        </div>
        <div className="numContainer">
          <div>
            <p>
              Min:
            </p>
            <input type="number" value={min} onChange={(e) => setMin(+e.target.value)} />
          </div>
          <div>
            <p>
              Max :
            </p>
            <input type="number" value={max} onChange={(e) => setMax(+e.target.value)} />
          </div>
        </div>
        <button onClick={handelRandomNumber} >Get random number</button>
      </div>

    </div>
  );
}

export default App;

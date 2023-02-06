import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [sex, setSex] = useState("male")

  const [level, setLevel] = useState(0.0)
  

  const calculate = (e) => {
    e.preventDefault()
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let result;
    if (sex === 'male') {
      result = gramsLeft / (weight * 0.7);
    }
    else {
      result = gramsLeft / (weight * 0.6);
    }

    if (result < 0) {
      result = 0;
    }

    setLevel(result)
  }

  return (
  <form onSubmit={calculate}>
    <h3>Calculating alcohol blood level</h3>
    <div>
      <label>Weight (kg) </label>
      <input value={weight} onChange={e => setWeight(e.target.value)} type="number" />
    </div>

    <div>
      <label>Bottles </label>
      <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div>
      <label>Time </label>
      <select name="time" value={time} onChange={e => setTime(e.target.value)} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div>
      <label>Sex </label>
      <input type="radio" name="sex" value="male" defaultChecked onChange={e => setSex(e.target.value)} /><label>Male</label>
      <input type="radio" name="sex" value="female" onChange={e => setSex(e.target.value)} /><label>Female</label>
    </div>

    <div>
      <output>{level.toFixed(2)}</output>
    </div>
    <button>Calculate</button>
    </form>
  )
}

export default App;

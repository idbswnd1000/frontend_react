import './App.css'
import { useState } from 'react'
import ScoresTable from './components/ScoresTable'
import style from './components/ScoresTable'

const intialScores = [
  { 이름: "존", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "피터", 국어: 80, 영어: 80, 수학: 90, 과학: 80 },
  { 이름: "수잔", 국어: 70, 영어: 70, 수학: 80, 과학: 70 },
  { 이름: "수", 국어: 60, 영어: 60, 수학: 70, 과학: 60 },
]

const initialInfo = {
  Name: "",
  Korean: null,
  English: null,
  Math: null,
  Science: null
}

function App() {
  const [info, setInfo] = useState(initialInfo)
  const [scores,setScores] = useState(intialScores)

  const handleChange = (event) => {
    const {name,value} = event.target;
    setInfo((prev) => (
      { ...prev, [name]: value }
    ))
    console.log(event.target.name)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setScores((prev)=>([...prev, info]))
    console.log(event.target)
  }
  return (
    <>
    <ScoresTable scores={scores}/>
    <form onSubmit={handleSubmit}>
      <div>Name: <input
        type="text"
        name="Name"
        value={info.Name}
        onChange={handleChange} /></div>
      <div>Korean: <input
        type="number"
        name="Korean"
        value={info.Korean}
        onChange={handleChange}
      /></div>
      <div>English: <input
        type="number"
        name="English"
        value={info.English}
        onChange={handleChange}
      /></div>
      <div>Math: <input
        type="number"
        name="Math"
        value={info.Math}
        onChange={handleChange}
      /></div>
      <div>Science: <input
        type="number"
        name="Science"
        value={info.Science}
        onChange={handleChange}
      /></div>
      <button>submit</button>
    </form>
    </>
  )
}    
export default App
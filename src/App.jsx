import './App.css'
import ScoresTable from './components/ScoresTable'

const style ={
  width: "500px",
  height: "300px",
  display:"flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:"center",
}

function App() {
  const handleChange = (event) => {
    console.log(event.target.name)
  }
  return (
    <form>
      <div>Name: <input
        type="text"
        name="Name"
        value=""
        onChange={handleChange}/></div>
      <div>Korean: <input
        type="number"
        name="Korean"
        value=""onChange={handleChange}/></div>
      <div>English: <input
      type="number"
      name="English"
      value=""onChange={handleChange}/></div>
      <div>Math: <input
        type="number"
        name="Math"
        value=""onChange={handleChange}/></div>
      <div>Science: <input
        type="number"
        name="Science"
        value=""onChange={handleChange}/></div>
      <button>submit</button>
    </form>
  )
}
export default App
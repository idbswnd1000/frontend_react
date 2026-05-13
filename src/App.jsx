import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores = [
  {이름:"존", 국어: 90, 영어: 90, 수학: 80, 과학:90},
  {이름:"피터", 국어: 80, 영어: 80, 수학: 90, 과학:80},
  {이름:"수잔", 국어: 70, 영어: 70, 수학: 80, 과학:70},
  {이름:"수", 국어: 60, 영어: 60, 수학: 70, 과학:60},]

function App() {
  const [count, setCount] = useState(0)

  return (
    <table>
      <tr>
        <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th>
      </tr>
      {[0,1,2,3].map(idx => (
          <tr>
            <td>{scores[idx].이름}</td>
            <td>{scores[idx].국어}</td>
            <td>{scores[idx].영어}</td>
            <td>{scores[idx].수학}</td>
            <td>{scores[idx].과학}</td>
          </tr>
        )
      )}
      {/* {[0,1,2,3].map(idx => {
        return (
          <tr>
            <td>{scores[idx].이름}</td>
            <td>{scores[idx].국어}</td>
            <td>{scores[idx].영어}</td>
            <td>{scores[idx].수학}</td>
            <td>{scores[idx].과학}</td>
          </tr>
        )
      })} */}
    </table>
  )
}
export default App
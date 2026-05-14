import { useState } from 'react'

const scores = [
  { 이름: "존", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "피터", 국어: 80, 영어: 80, 수학: 90, 과학: 80 },
  { 이름: "수잔", 국어: 70, 영어: 70, 수학: 80, 과학: 70 },
  { 이름: "수", 국어: 60, 영어: 60, 수학: 70, 과학: 60 },
]
const style = {
  width: "500px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

function ScoresTable({scores}) {
  return (
    <table>
      <tr>
        {
          Object.keys(scores[0]).map(key=>(
            <th>{key}</th>
          ))
        }
      </tr>
      {scores.map(item => (
          <tr>
            {Object.values(item).map(
              value=><td>{value}</td>
            )}
          </tr>
        )
      )}
    </table>
  )
}
export default ScoresTable
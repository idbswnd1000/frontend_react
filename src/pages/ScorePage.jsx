import React,{ useState } from 'react'
import ScoresTable from '../components/score/ScoresTable'
import Form from '../components/score/Form'

const initialScores = [
  { 이름: "존", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "피터", 국어: 80, 영어: 80, 수학: 90, 과학: 80 },
  { 이름: "수잔", 국어: 70, 영어: 70, 수학: 80, 과학: 70 },
  { 이름: "수", 국어: 60, 영어: 60, 수학: 70, 과학: 60 },
]

const initialInfo = {
  이름: "",
  국어: null,
  영어: null,
  수학: null,
  과학: null
}

function ScorePage() {
  const [info, setInfo] = useState(initialInfo)
  const [scores,setScores] = useState(initialScores)
  return (
    <>
    <ScoresTable scores={scores}/>
    <Form info={info} setInfo={setInfo} setScores={setScores}/>
    </>
  )
}

export default ScorePage

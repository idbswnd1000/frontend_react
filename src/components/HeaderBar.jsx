import React from 'react'
import {Link} from 'react-router-dom'

function HeaderBar() {
  return (
    <div>
    <Link style={{marginLeft:"15pt"}} to="/score">점수</Link>
    <Link style={{marginLeft:"15pt"}} to="/employee">고용인 정보</Link>
    <Link style={{marginLeft:"15pt"}} to="/user">사용자 정보</Link>
    </div>
  )
}

export default HeaderBar

import './App.css'
import ScorePage from './pages/ScorePage'
import UserPage from './pages/UserPage'
import EmployeePage from './pages/EmployeePage'
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom' 
import HeaderBar from './components/HeaderBar'

function App() {
  return (
    <BrowserRouter>
    <HeaderBar/>
      <Routes>
        <Route path="/score" element={<ScorePage/>}/>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/employee" element={<EmployeePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}    
export default App
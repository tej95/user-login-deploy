import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
  )
}

export default App

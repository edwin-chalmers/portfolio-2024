import { useState } from 'react'
import { Route, Routes, useNavigate, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import Error from './components/Error/Error'
import Mail from './Mail/Mail'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/mail' element={<Mail />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error error='*' />} />
    </Routes>
  )
}

export default App

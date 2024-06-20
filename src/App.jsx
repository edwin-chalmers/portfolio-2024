import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import Mail from './components/Mail/Mail'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/mail' element={<Mail />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error error='*' />} />
    </Routes>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainButton from './components/mainButton'
import Home from './pages/home'
import Lesson1 from './pages/lesson1'
import Lesson2 from './pages/lesson2'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
      </Routes>
    </Router>
  )
}

export default App

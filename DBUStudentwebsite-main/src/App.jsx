import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Branches from './pages/Branches'
import Clubs from './pages/Clubs'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  // Simple user state - stored in localStorage for persistence
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('dbu_user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  // Save user to localStorage when it changes
  const updateUser = (newUser) => {
    setUser(newUser)
    if (newUser) {
      localStorage.setItem('dbu_user', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('dbu_user')
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} setUser={updateUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register setUser={updateUser} />} />
          <Route path="/login" element={<Login setUser={updateUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
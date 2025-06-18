import Welcome from './components/Welcome'
import Login from './components/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

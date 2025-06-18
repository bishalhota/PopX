import Welcome from './components/Welcome'
import Login from './components/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/Login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App

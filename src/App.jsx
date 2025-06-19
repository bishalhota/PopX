import Welcome from './components/Welcome'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import AccountPage from './components/AccountPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Account"  element={<AccountPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

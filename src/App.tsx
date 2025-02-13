import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  
  return (
    <>
      <Routes>
        {/*Default Path*/}
        <Route path='/' element={<Navigate to="login" />} />
        
        {/* Login Page */}
        <Route path='/login' element={<Login />} />
        
        {/* Home Page */}
        <Route path='/home' element={<Home />} />

        {/* Catch-all Route (Redirect to Login) */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  )
}

export default App
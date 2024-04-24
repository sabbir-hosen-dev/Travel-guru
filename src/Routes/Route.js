import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../Components/Pages/Home"
import Login from '../Components/Pages/Login'
import Error from '../Components/Pages/Error'

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="*" element={<Error/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute

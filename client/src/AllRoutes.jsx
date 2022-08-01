import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AskQuestion from './components/pages/AskQuestion/AskQuestion'
import Auth from './components/pages/Auth/Auth'
import Home from './components/pages/Home/Home'
import DisplayQuestion from './components/pages/Questions/DisplayQuestion'
import Questions from './components/pages/Questions/Questions'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/Questions/:id" element={<DisplayQuestion />} />
    </Routes>
  )
}

export default AllRoutes;
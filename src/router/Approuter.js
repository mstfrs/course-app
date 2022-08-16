import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from '../components/Courses'
import Details from '../pages/details/Details'

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Courses />} />

          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approuter

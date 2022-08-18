import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Courses from '../pages/courses/Courses'

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approuter

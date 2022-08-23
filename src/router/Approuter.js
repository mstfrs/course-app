import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Courses from '../pages/courses/Courses'
// import DetailsModal from "../components/Modal/DetailsModal"

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Courses />} />
          {/* <Route path=":id" element={<DetailsModal/> } /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approuter

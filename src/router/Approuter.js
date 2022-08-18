import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsModal from '../components/Modal/DetailsModal'
import ModalContext from '../context/ModalContext'
import Courses from '../pages/courses/Courses'

import Details from '../pages/details/Details'

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Courses />} />

          {/* <Route path="/modal" element={<DetailsModal />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approuter

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import { SingleImage } from '../Components/SingleImage'

const AllRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/photos/:id" element={<SingleImage />} />
    </Routes>
  )
}

export default AllRoutes;
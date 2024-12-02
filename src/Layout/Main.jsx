import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import Banner from '../pages/Home/Banner/Banner'

export default function () {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

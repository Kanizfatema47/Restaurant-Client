import React from 'react'
import { Outlet } from 'react-router'
import Home from '../pages/Home/Home/Home'

export default function () {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

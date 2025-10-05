import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Navber'
const Mainlayout = () => {
  return (
    <>
      <header><Navber /></header>
      <main><Outlet /></main>
      <footer></footer>
    </>
  )
}

export default Mainlayout

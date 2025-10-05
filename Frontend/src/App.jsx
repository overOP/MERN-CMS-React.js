import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'

const App = () => {
  return (
     <RouterProvider router={router}/>
  )
}

export default App
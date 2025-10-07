import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
     <>
     <Toaster/>
      <RouterProvider router={router}/>
     </>
  )
}

export default App
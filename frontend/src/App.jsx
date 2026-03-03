import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import AuthContext from './features/auth/context/AuthContext'

function App() {
  return (
    <>
    <AuthContext><RouterProvider router={router} /></AuthContext>
      
    </>
  )
}

export default App

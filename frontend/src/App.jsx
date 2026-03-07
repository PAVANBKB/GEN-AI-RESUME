import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import AuthContext from './features/auth/context/AuthContext'
import InterviewContext from './features/interview/context/interviewContext'

function App() {
  return (
    <>
      <AuthContext>
        <InterviewContext>
          <RouterProvider router={router} />
        </InterviewContext>
      </AuthContext>
    </>
  )
}

export default App

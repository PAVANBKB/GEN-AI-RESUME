import React, { createContext, useState } from 'react'
export const context = createContext()
function InterviewContext({ children }) {
  const [loading, setLoading] = useState(fasle)
  const [report, setReport] = useState(null)
  const [reports, setReports] = useState([])
  return (
    <context.Provider value={{ loading, setLoading, report, setReport, reports, setReports }}>
      {children}
    </context.Provider>
  )
}

export default InterviewContext

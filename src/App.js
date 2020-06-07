// React
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Pages
import Index from './pages/Index.jsx'

function App () {
  return (
    <BrowserRouter>
      <Route
        path="/"
        component={Index}
      />
    </BrowserRouter>
  )
}

export default App

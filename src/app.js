import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'

import { Home } from './screens/home'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

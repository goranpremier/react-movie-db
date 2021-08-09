import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './screens/home'

function App() {
  return (
    <>
      <main style={{ marginTop: 61 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App

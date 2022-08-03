import * as React from "react"
import { Routes, Route } from "react-router-dom"

import styles from './app.module.css'

import Characters from './pages/characters'
import Locations from './pages/locations'
import Episodes from './pages/episodes'
import NavBar from './components/navbar'
import BottomBar from './components/bottomBar'

function App() {

  return (
    <>
      <NavBar />
      <div className={styles.scroll}>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </div>
      <BottomBar />
    </>
  )
}

export default App

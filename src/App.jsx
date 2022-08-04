import * as React from "react"
import { Routes, Route } from "react-router-dom"

import styles from './app.module.css'

import Profile from './pages/profile'
import Characters from './pages/characters'
import Locations from './pages/locations'
import Episodes from './pages/episodes'
import NavBar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <>
      <NavBar />
      <div className={styles.scroll}>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:episode" element={<Episodes />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

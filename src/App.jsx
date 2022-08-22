import * as React from "react"
import { Routes, Route } from "react-router-dom"

import styles from './app.module.css'

import Character from './pages/character'
import Characters from './pages/characters'
import Locations from './pages/locations'
import Episodes from './pages/episodes'
import LocationInfo from './pages/locationInfo'
import EpisodeInfo from './pages/episodeInfo'
import NavBar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <>
      <NavBar className={styles.navBar} />
      <div className={styles.scroll}>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:name/:id" element={<Character />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:location" element={<LocationInfo />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:episode" element={<EpisodeInfo />} />
          <Route path="*" element={<Characters />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

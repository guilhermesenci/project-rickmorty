import * as React from "react"
import { Routes, Route } from "react-router-dom"

import Characters from './pages/characters'
import Locations from './pages/locations'
import Episodes from './pages/episodes'

import styles from './app.module.css'
import logo from './assets/logo.svg'

import NavBar from './components/navbar'

function App() {

  return (
    <>
      <NavBar />
      <header className={styles.header}>
        <img src={logo} />
      </header>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>

    </>
  )
}

export default App

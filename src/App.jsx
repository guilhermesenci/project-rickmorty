import React from 'React'

import styles from './app.modules.css'
import logo from './assets/logo.svg'

import Card from './components/card'
import NavBar from './components/navbar'
import SelectMenu from './components/SelectMenu'

function App() {

  return (
    <>
      <NavBar />
      <header className={styles.header}>
        <img src={logo} />
      </header>
      <div className={styles.inputMenu}>
        <SelectMenu label="teste" value="teste" />
      </div>
      <Card />
    </>
  )
}

export default App

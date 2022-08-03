import React from 'React'
import useFetch from './hooks/useFetch'

import styles from './app.module.css'
import logo from './assets/logo.svg'

import NavBar from './components/navbar'
import Card from './components/card'

function App() {
  const { data: characters, isFetching } =
    useFetch("https://rickandmortyapi.com/api/character")

  return (
    <>
      <NavBar />
      <header className={styles.header}>
        <img src={logo} />
      </header>
      {characters?.map(character => {
        return (
          <Card
            img={character.image}
            name={character.name}
            specie={character.species}
            key={character.id}
          />
        )
      })}
    </>
  )
}

export default App

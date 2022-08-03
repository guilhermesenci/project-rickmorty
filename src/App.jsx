import React, { useEffect } from 'React'
import useFetch from './hooks/useFetch'

import styles from './app.modules.css'
import logo from './assets/logo.svg'

import Card from './components/card'
import NavBar from './components/navbar'
import SelectMenu from './components/SelectMenu'

function App() {
  const { data: characters, isFetching } =
    useFetch("https://rickandmortyapi.com/api/character")

  useEffect(() => { console.log(characters) }, [characters])

  return (
    <>
      <NavBar />
      <header className={styles.header}>
        <img src={logo} />
      </header>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {characters?.map(character => {
          return (
            <li key={character.id}>{character.name}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App

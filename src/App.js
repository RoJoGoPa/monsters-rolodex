import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])
  const [search, setSearch] = useState('')
  const handleOnChange = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFilteredMonsters(monsters.filter(monster => monster.name.includes(search)))
  }, [monsters, search])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setMonsters(data)
      })
  }, [])

  return (
    <div className="App">
      <h1>Mosnters Rolodex</h1>
      <SearchBox
        handleOnChange={handleOnChange}
        search={search}
        placeholder="search monsters"
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  )
}

export default App

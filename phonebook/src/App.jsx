import { useState, useEffect } from 'react'
import Persons from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [shownPersons, setShownPersons] = useState(persons)

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const people = response.data
        console.log(people)
        setPersons(people)
        setShownPersons(people)
      })
  }

  useEffect(hook, [])

  const addPerson = (e) => {
    e.preventDefault()

    const name = newName.trim()
    const number = newNumber.trim()
    if (name === '' || number === '') return

    const existedPerson = persons.find(person => person.name === name)
    if (existedPerson !== undefined) {
      alert(`${name} is already added to phonebook`)
      return
    }

    const newPerson = {
      name,
      number,
      id: persons.length + 1
    }

    setPersons(persons.concat(newPerson))
    setShownPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const filterPersons = (event) => {
    const searchingName = event.target.value
    setNewSearch(searchingName)

    const filteredPersons = persons.filter(person => 
      person.name.toLowerCase().startsWith(searchingName)  
    ) // if input '' - return whole array (because all starts with '' :) )

    setShownPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        label="filter shown with "
        value={newSearch}
        onChange={filterPersons}
      />
      <form>
        <h2>Add a new</h2>
        <PersonForm 
          newName={newName}
          setNewName={(e) => setNewName(e.target.value)}
          newNumber={newNumber}
          setNewNumber={(e) => setNewNumber(e.target.value)}
          onSubmit={addPerson}
        />
      </form>
      <h2>Numbers</h2>
      <Persons persons={shownPersons}/>
    </div>
  )
}

export default App
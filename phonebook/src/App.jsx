import { useState } from 'react'
import Persons from './components/Person'
import Button from './components/Button'
import Input from './components/Input'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '099-334-1221',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [shownPersons, setShownPersons] = useState(persons)

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
      <Input 
        label="filter shown with "
        value={newSearch}
        onChange={filterPersons}
      />
      <form>
        <h2>Add a new</h2>
        <Input 
          label="name: "
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input 
          label="number: "
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
        <Button text="add" onClick={addPerson} type="submit" />
      </form>
      <h2>Numbers</h2>
      <Persons persons={shownPersons}/>
    </div>
  )
}

export default App
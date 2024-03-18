import { useState, useEffect } from 'react'

import servises from './services/persons'

import Persons from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import SuccessNotification from './components/SuccessNotification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [successAddMessage, setSuccessAddMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    servises
      .getAll()
      .then(people => {
        setPersons(people)
      })
  }, [])

  const notify = (name, success = true) => {
    if (success) {
      setSuccessAddMessage(`${name} has been added`)
      setTimeout(() => setSuccessAddMessage(null), 4000)
    } else {
      setErrorMessage(`${name} has already been removed from server`)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const addPerson = (e) => {
    e.preventDefault()

    const name = newName.trim()
    const number = newNumber.trim()
    if (name === '' || number === '') return

    const existedPerson = persons.find(person => person.name === name)
    if (existedPerson !== undefined) {
      if(confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
        const id = existedPerson.id

        servises
          .update(id, { name, number })
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : updatedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(() => {
            setPersons(persons.filter(p => p.id !== id))
            notify(existedPerson.name, false)
            setNewName('')
            setNewNumber('')
          })
          
      }
      return
    }

    const newPerson = {
      name,
      number,
      // id: persons.length + 1     omited (let json-server to create own id)
    }

    servises
      .create(newPerson)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson))
        setNewName('')
        setNewNumber('')
        notify(createdPerson.name)
      })

    
  }

  // const filterPersons = (event) => {
  //   const searchingName = event.target.value
  //   setNewSearch(searchingName)

  //   const filteredPersons = persons.filter(person => 
  //     person.name.toLowerCase().startsWith(searchingName)  
  //   ) // if input '' - return whole array (because all starts with '' :) )

  //   setShownPersons(filteredPersons)
  // }

  const filterPersons = () => {
    return persons.filter(person => (person.name.toLowerCase().startsWith(newSearch)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification message={successAddMessage} />
      <ErrorNotification message={errorMessage} />
      <Filter 
        label="filter shown with "
        value={newSearch}
        setNewSearch={setNewSearch}
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
      <Persons persons={filterPersons()} setPersons={setPersons} />
    </div>
  )
}

export default App
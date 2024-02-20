import { useState, useEffect } from 'react'

import requests from './requests'

import Input from './components/Input'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    getAllCountries()
  }, [])

  const getAllCountries = async () => {
    setCountries(await requests.getAllCountries())
  }

  return (
    <div>
      <Input 
        value={query}
        onChange={setQuery}
      />
      <Countries countries={countries} query={query} setQuery={setQuery} />
    </div>
  )
}

export default App

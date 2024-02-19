import { useState, useEffect } from 'react'

import requests from './requests'

import Input from './components/Input'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    requests.getAllCountries()
  }, [])

  return (
    <div>
      <Input onChange={setQuery} />
    </div>
  )
}

export default App

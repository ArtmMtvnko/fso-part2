import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllCountries = async () => {
    const response = await axios.get(`${baseUrl}/all`)
    const data = await response.data
    console.log(data)
}

export default { getAllCountries }
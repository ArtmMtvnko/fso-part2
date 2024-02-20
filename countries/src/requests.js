import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllCountries = async () => {
    const response = await axios.get(`${baseUrl}/all`)
    const data = response.data
    return data
}

const baseWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901'
const api_key = import.meta.env.VITE_WEATHER_API_KEY

const getWeather = async (location) => {
    const response = await axios.get(`${baseWeatherUrl}&appid=${api_key}&q=${location}`)
    const data = response.data
    console.log(data)
    return data
}


export default { getAllCountries, getWeather }
import { useEffect, useState } from "react"
import requests from "../requests"

const Weather = ({ countryName }) => {
    const [weather, setWeather] = useState(null)
    
    const getWeather = async (country) => {
        setWeather(await requests.getWeather(country))
    }

    useEffect(() => {
        getWeather(countryName)
    }, [])

    return (
        <div>
            <h2>Weather in {countryName}</h2>
            <p>Temperature {((weather?.list[0].main.temp) - 273.15).toFixed(2)} Celcius</p>
            <p>Wind {weather?.list[0].wind.speed} m/s</p>
        </div>
    )
}

export default Weather
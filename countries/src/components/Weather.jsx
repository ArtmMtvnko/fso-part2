import { useEffect, useState } from "react"
import requests from "../requests"

const Weather = ({ countryName }) => {
    const [weather, setWeather] = useState(null)
    
    const getWeather = async (country) => {
        setWeather(await requests.getWeather(country))
    }

    useEffect(() => {
        getWeather(countryName)
    }, [countryName])

    const getIcon = iconId => `https://openweathermap.org/img/wn/${iconId}@2x.png`

    return (
        <div>
            <h2>Weather in {countryName}</h2>
            <p>Temperature {((weather?.list[0].main.temp) - 273.15).toFixed(2)} Celcius</p>
            <img src={getIcon(weather?.list[0].weather[0].icon)} alt="Weather icon" />
            <p>Wind {weather?.list[0].wind.speed} m/s</p>
        </div>
    )
}

export default Weather
import Weather from "./Weather"

const CountryInfo = ({ country }) => {
    const showLanguages = (languagesObj) => {
        const languages = Object.keys(languagesObj)

        return (
            <ul>
                {languages.map(lang => 
                    <li key={lang}>{languagesObj[lang]}</li>
                )}
            </ul>
        )
    }

    const flagStyles = {
        width: 200,
        border: '1px solid black'
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            {showLanguages(country.languages)}
            <img src={country.flags.svg} alt={country.flags.alt} style={flagStyles} />
            <Weather countryName={country.name.common} />
        </div>
    )
}

export default CountryInfo
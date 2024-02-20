import CountryInfo from "./CountryInfo"

const Country = ({ name, setQuery }) => {
    const showCountryInfo = () => {
        setQuery(name)
    }

    return (
        <li>
            {name}
            <button onClick={showCountryInfo}>show</button>
        </li>
    )
}

const Countries = ({ countries, query, setQuery }) => {
    // console.log(countries)

    if (query.trim() === '') 
        return (
            <ul>
                <p>Start entering the country</p>
            </ul>
        )

    const filtered = countries.filter(country => country.name.common.startsWith(query))

    // console.log(filtered)

    if (filtered.length === 1) {
        return <CountryInfo country={filtered[0]} />
    } else if (filtered.length > 10) {
        return (
            <ul>
                <p>Too many matches, specify another filter</p>
            </ul>
        )
    } else {
        return (
            <ul>
                {filtered.map(country => 
                    <Country 
                        key={country.name.common}
                        name={country.name.common}
                        setQuery={setQuery}
                    />
                )}
            </ul>
        )
    }
}

export default Countries
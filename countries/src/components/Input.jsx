const Input = ({ onChange }) => {
    const firstUpperLetter = str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    } 

    return (
        <div>
            find countries
            <input onChange={e => onChange(firstUpperLetter(e.target.value))} />
        </div>

    )
}

export default Input
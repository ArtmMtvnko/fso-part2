const Input = ({ value, onChange }) => {
    const firstUpperLetter = str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    } 

    return (
        <div>
            find countries
            <input
                value={value}
                onChange={e => onChange(firstUpperLetter(e.target.value))}
            />
        </div>

    )
}

export default Input
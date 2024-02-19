const Input = ({ onChange }) => {
    return (
        <div>
            find countries
            <input onChange={e => onChange(e.target.value)} />
        </div>

    )
}

export default Input
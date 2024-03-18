import Input from "./Input"

const Filter = ({label, value, setNewSearch}) => {
    return (
        <Input 
            label={label}
            value={value}
            onChange={(event) => setNewSearch(event.target.value)}
        />
    )
}

export default Filter
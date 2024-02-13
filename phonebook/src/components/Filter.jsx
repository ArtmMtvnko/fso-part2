import Input from "./Input"

const Filter = ({label, value, onChange}) => {
    return (
        <Input 
            label={label}
            value={value}
            onChange={onChange}
        />
    )
}

export default Filter
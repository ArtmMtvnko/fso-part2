import Input from "./Input";
import Button from "./Button";

const PersonForm = (props) => {
    return (
        <>
            <Input 
                label="name: "
                value={props.newName}
                onChange={props.setNewName}
            />
            <Input 
                label="number: "
                value={props.newNumber}
                onChange={props.setNewNumber}
            />
            <Button text="add" onClick={props.onSubmit} type="submit" />
        </>
    )
}

export default PersonForm
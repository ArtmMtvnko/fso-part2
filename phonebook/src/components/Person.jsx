import servises from './../services/persons'

const Person = ({person, onClick}) => {
    return (
        <p>
            {person.name}: {person.number}
            <button onClick={onClick} >delete</button>
        </p>
    )
}

const Persons = ({ persons, setPersons }) => {
    const deleteEntrie = id => {
        console.log('deleting ', id)
        if (window.confirm(`Do you realy want to delete'?`)) {
                servises
                    .deleteEntrie(id)
                    .then(() => setPersons(persons.filter(person => person.id !== id)))
        }
    }

    return (
        <>
            {persons.map(person => 
                <Person onClick={() => deleteEntrie(person.id)} key={person.id} person={person} />
            )}
        </>
    )
}

export default Persons
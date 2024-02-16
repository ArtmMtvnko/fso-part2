import servises from './../services/persons'

const Person = ({person, onClick}) => {
    return (
        <p>
            {person.name}: {person.number}
            <button onClick={onClick} >delete</button>
        </p>
    )
}

const Persons = ({ persons, setPersons, setShownPersons }) => {
    const deleteEntrie = id => {
        console.log(id)
        servises
            .deleteEntrie(id)
            .then(deletedEntrie => {
                if (window.confirm(`Do you realy want to delete '${deletedEntrie.name}'?`)) {
                    const filtered = persons.filter(person => person.id !== id)
                    setPersons(filtered)
                    setShownPersons(filtered)
                }
            })
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
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
  
  const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}
  
const Content = ({ parts }) => {
    console.log(parts)
    return (
        <div>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}
  
const Total = ({ parts }) => {
    return (
        <p>
            <b>
                total of {parts.reduce((acc, part) => acc + part.exercises , 0)} exercises
            </b>
        </p>
    )
}
  
const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course
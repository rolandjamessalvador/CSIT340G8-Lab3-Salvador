const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Number of exercises {totalExercises}</p>
}

const Footer = (props) => {
  return (
    <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <p>{props.name} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name="Roland James O. Salvador" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App
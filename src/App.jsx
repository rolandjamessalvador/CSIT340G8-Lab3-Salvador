
const Header = (props) => {
  return <h1>{props.course}</h1>
}


const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}


const Footer = (props) => {
  return (
    <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <p>{props.name} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

// Main App Component (Using individual variables as requested in 1.1)
const App = () => {
  const course = 'CSIT340 - Web Development'
  
  const part1 = 'CSIT340 Web Development'
  const exercises1 = 3

  const part2 = 'CSIT321 Data Structures and Algorithms'
  const exercises2 = 3

  const part3 = 'MATH201 Integral Calculus'
  const exercises3 = 4

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      
      {/* Required Footer with your info */}
      <Footer name="Roland James O. Salvador" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App
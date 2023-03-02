const Course =({course})=>{

    const Header = ({course}) =><p className="heading">{course.name}</p>
  
    const Part = ({part})=><p>{part.name} : {part.exercises}</p>
  
    const Content = ({course})=>{
      return(
        <div>
          {course.parts.map(part => <Part key = {part.id} part = {part}/>)}
        </div>
      )
    }
    const Total = ({course}) =>{
      const total = course.parts.reduce((sum,part)=>{
        return sum + part.exercises
      },0)
      return(
        <p className='total'>total of : {total} exercises</p>
      )
    }
    return(
      <div>
        <Header course={course}/>
        <Content course = {course}/>
        <Total course = {course}/>
      </div>
    )
  }

export default Course;
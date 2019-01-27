import React, {Component} from 'react'
import CourseShow from './course/CourseShow'

class CoursesList extends Component {
  constructor(props) {
    super(props)
    this.state={
      golf_courses: []
    }
  }
  componentDidMount() {
    fetch('/api/v1/golf_courses')
    .then(response => response.json())
    .then(body => {
      this.setState({
        golf_courses: body
      })
    })
  }

  render() {
    let GolfCourseList = this.state.golf_courses.map(golf_course => {
      return (
        <CourseShow
        key={golf_course.id}
        id={golf_course.id}
        courseName={golf_course.name}
        />
      )
    })

    return(
      <div>
        {GolfCourseList}
      </div>
    )
  }
}

export default CoursesList

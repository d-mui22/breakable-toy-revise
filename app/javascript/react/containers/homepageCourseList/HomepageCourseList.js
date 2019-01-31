import React, {Component} from 'react'
import CourseList from '../../components/homepage/courses/CoursesList'
import Scorecards from '../../components/scorecards/ScoreCards'

class HomepageCourseList extends Component {
  constructor(props) {
    super(props)
    this.state={
      golf_courses: [],
      scorecards: []
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
    return(
      <div>
        <CourseList
          courseList={this.state.golf_courses}
        />
      </div>
    )
  }
}

export default HomepageCourseList

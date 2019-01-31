import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import HomepageCourseList from '../containers/homepageCourseList/HomepageCourseList'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={HomepageCourseList}/>
      </Router>
    </div>
  )
}

export default App

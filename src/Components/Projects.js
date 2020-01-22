import React, { Component } from 'react'
import { BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom'
  
 import NodeJS from './Projects/NodeJS';
 import PorjectsHome from './Projects/ProjectsHome';
 import ProjectsReact  from './Projects/ProjectsReact';

export default class Projects extends Component {
render(){
    return(
              <Router>
      <ul>
        <li>
          <Link to="/">ProjectsHome</Link>
        </li>
        <li>
          <Link to="/NodeJS">NodeJS</Link>
        </li>
        <li>
          <Link to="/ProjectsReact">ProjectsReact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/"><PorjectsHome /></Route>
        <Route exact path="/NodeJS"><NodeJS /></Route>
        <Route exact path="/ProjectsReact"><ProjectsReact /></Route>
      </Switch>
    </Router>
    )
}
}
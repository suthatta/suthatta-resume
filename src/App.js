import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/About"><About /></Route>
        <Route exact path="/Projects"><Projects /></Route>
      </Switch>
    </Router>
  );
}

export default App;

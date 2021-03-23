import React from 'react'

import Home from '../pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admin from '../pages/Admin';

function App() {
  return (
      <Router>  
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/admin' component={Admin}/>
          </Switch>     
      
      </Router>
  );
}

export default App;
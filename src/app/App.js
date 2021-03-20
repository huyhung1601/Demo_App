import React from 'react'

import Home from '../pages/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DashBoar from '../pages/DashBoar';

function App() {
  return (
      < Router>  
          <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/board' component={DashBoar}/>
          </div>      
          
      
      </Router>
  );
}

export default App;

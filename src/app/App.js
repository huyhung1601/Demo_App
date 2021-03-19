import React from 'react'
import about from '../pages/about'
import Home from '../pages/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
      < Router>  
          <div>
            <Route exact path='' component={Home}/>
            <Route exact path='/about' component={about}/>
          </div>      
          
      
      </Router>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashBoard from './DashBoard';
import NewTask from './NewTask';
import {useRouteMatch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import StandardComponent from './StandardComponent'
/**
 * Admin Layout
 */
const Admin = () => {
    const { path } = useRouteMatch();
    return (
        <>
            <NavBar/> 
            <Router>  
                <Switch>
                <Route exact path={`${path}`} component={DashBoard}/>
                <Route exact path={`${path}/new-task`} component={NewTask}/>
                <Route exact path={`${path}/test`} component={StandardComponent}/>
                </Switch>     
            
            </Router>
        </>
    );
}

export default Admin
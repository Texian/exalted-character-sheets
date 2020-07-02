import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import CharacterContainer from '../containers/CharacterContainer';
import Register from '../components/auth/Register/Register';
import Login from '../components/auth/Login/Login';

const Routes = (props) => {
    return(
        <Switch>
            <Route 
            exact path='/'
            component={Home}
            />
            <Route
            path='/characters'
            render={
                () => props.user ?
                <CharacterContainer />
                :
                <Redirect to='/login' />
            }
            />
            <Route
            path='/register'
            render={
                () => props.user ?
                <Redirect to='/characters' />
                :
                <Register register={props.register} />
            }
            />
            <Route
            path='/login'
            render={
                () => props.user ?
                <Redirect to='/characters' />
                :
                <Login login={props.login} />
            }
            />
        </Switch>
    )
}

export default Routes;
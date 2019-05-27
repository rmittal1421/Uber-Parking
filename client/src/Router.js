import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <Route path='/' exact component={Home} />
                    <Route path='/signup' exact component={Signup} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router

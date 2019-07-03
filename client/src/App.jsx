// import {config} from 'dotenv'
import React, {Component} from 'react'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/reducers'
import Router from './Router'

// config()

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App



// Add Error Boundaries in react

import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './redux/reducers'
import Router from './Router'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const store = createStore(reducer)
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App



// Add Error Boundaries in react

import React, {Component} from 'react'
import {loginUser} from './actions'
import {connect} from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin(e) {
        e.preventDefault()
        // Here we shall dispatch the action for registration
        this.props.loginUser(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <input
                    name="email"
                    type="email"
                    required={true}
                    value={this.state.email}
                    placeholder="Your preferred email address"
                    onChange={this.handleChange}
                />
                <input
                    name="password"
                    type="password"
                    required={true}
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                <button type="submit"> Login </button>
            </form>
        )
    }
}

// TODO: This needs to be changed with the actual state (user information)
// when the next workflow is decided.
function mapStateToProps(state) {
    console.log(state)
    return {
        something: 'something'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (payload) => dispatch(loginUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {USER_REGISTRATION, registerUser} from './actions'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.handleRegistration = this.handleRegistration.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            name: "",
            age: "",
            email: "",
            password: "",
            address: "",
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegistration(e) {
        e.preventDefault()
        // Here we shall dispatch the action for registration
        this.props.registerUser(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleRegistration}>
                <input
                    name="name"
                    type="text"
                    required={true}
                    value={this.state.name}
                    placeholder="First and Last Name"
                    onChange={this.handleChange}
                />
                <input
                    name="age"
                    type="number"
                    value={this.state.age}
                    placeholder="Your age"
                    onChange={this.handleChange}
                />
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
                <button type="submit"> Register Now </button>
            </form>
        )
    }
}

// TODO: This needs to be changed with the actual state (user information)
// when the next workflow is decided.
function mapStateToProps(state) {
    return {
        something: 'something'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: (payload) => dispatch(registerUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateLocationAction} from './actions'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currLocation.location) {
            const {latitude, longitude} = nextProps.currLocation.location
            this.props.history.push(`/search?longitude=${longitude}&latitude=${latitude}`)
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updateLocation(this.state.location)
        this.setState({
            location: ''
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let {location, error} = this.props.currLocation
        if (location) {
            location = (
                <div>
                    <h2> Name: {location.location} </h2>
                    <h2> Latitude: {location.latitude} </h2>
                    <h2> Longitude: {location.longitude} </h2>
                </div>
            )
        }
        if (error) {
            error = (
                <h1>
                    {error}
                </h1>
            )
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='location'
                        value={this.state.location}
                        onChange={this.handleChange}
                    />
                    <button type='submit'> Submit </button>
                </form>
                {location ? location : ""}
                {error ? error : ""}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currLocation: state.componentsState.currLocation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateLocation: (payload) => dispatch(updateLocationAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
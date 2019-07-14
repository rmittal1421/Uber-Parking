import React, {Component} from 'react'
import {connect} from 'react-redux'

class DashBoard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // Do the API call here
    }

    getDisplayLocation() {
        
    }

    render() {
        const hasLocation = this.props.location
        const {latitude, longitude, location} = this.props.location
        console.log(latitude, longitude)
        const hasLocationAttributes = latitude && longitude
        const displayLocation = (
            <div>
                <h2> Name: {location} </h2>
                <h2> Latitude: {latitude} </h2>
                <h2> Longitude: {longitude} </h2>
            </div>
        )
        return (
            <div>
                { hasLocation && hasLocationAttributes && displayLocation }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        location: state.componentsState.currLocation.location
    }
}

export default connect(mapStateToProps) (DashBoard)
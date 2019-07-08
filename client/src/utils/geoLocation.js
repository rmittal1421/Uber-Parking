import axios from 'axios';
import {URLS, RESPONSE_FORMAT} from './constants'

export const getLocation = (address) => {
    const url = `${URLS.BASE_GEOCODE_URL}/${address}.${RESPONSE_FORMAT}?access_token=${process.env.REACT_APP_GEOCODE_API_KEY}`

    return axios.get(url)
        .then((res) => res.data)
        .then((data) => data.features)
        .then((features) => {
            if(!features.length) {
                throw new Error('Sorry, no cities found with the following name. Please Try Again')
            }
            return {
                longitude: features[0].center[0],
                latitude: features[0].center[1],
                location: features[0].place_name
            }
        })
        .catch((error) => {throw new Error(error.message)})
}
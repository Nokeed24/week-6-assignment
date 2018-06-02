import { SELECT_SAUCE } from '../actions/types'

export default (state = "", { type, payload } = {}) => {
    switch(type) {
        case SELECT_SAUCE:
            return payload
        default: 
            return state
    }
}
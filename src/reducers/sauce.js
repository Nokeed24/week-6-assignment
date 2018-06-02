import { SELECT_SAUCE } from '../actions/types'

export default (state = "", { type, payload } = {}) => {
    switch(type) {
        case SELECT_SAUCE:
            return payload.sauce
        default: 
            return state
    }
}
import { SELECT_TURBO } from '../actions/types'

export default (state = false, { type, payload } = {}) => {
    switch(type) {
        case SELECT_TURBO:
            return payload.turbo
        default: 
            return state
    }
}
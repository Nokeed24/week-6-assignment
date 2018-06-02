import { SELECT_TOPPING } from '../actions/types'

export default (state = [], { type, payload } = {}) => {
    switch(type) {
        case SELECT_TOPPING:
            return payload.toppings
        default: 
            return state
    }
}
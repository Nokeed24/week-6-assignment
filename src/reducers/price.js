import { UPDATE_PRICE } from '../actions/types'

export default (state = 0, { type, payload } = {}) => {
  switch(type) {
      case UPDATE_PRICE:
          return payload.price
      default: 
          return state
  }
}
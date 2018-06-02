import { SELECT_BASE } from '../actions/types'

export default (state = "", { type, payload } = {}) => {
  switch(type) {
      case SELECT_BASE:
          return payload.base
      default: 
          return state
  }
}
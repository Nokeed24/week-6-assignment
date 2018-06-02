// src/actions/pizza.js
import { SELECT_TURBO, SELECT_BASE, SELECT_TOPPING, SELECT_SAUCE } from './types'

export const selectBase = () => {
  return {
    type: SELECT_BASE,
    payload: {
      word,
      letters
    }
  }
}

export const selectTurbo = (turbo) => {
  return {
    type: SELECT_TURBO,
    payload: {
      turbo
    }
  }
}

export const selectTopping = (toppings) => {
  return {
    type: SELECT_TOPPING,
    payload: {
      toppings
    }
  }
}

export const selectTopping = (sauce) => {
  return {
    type: SELECT_SAUCE,
    payload: {
      sauce
    }
  }
}
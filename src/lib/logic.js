// First you pick your base. You have four options:

// 1. 25cm NY Style € 8,99
// 2. 30cm NY Style € 11,49
// 3. 35cm NY Style € 13,49
// 4. 20cm NY Style € 6,45

// After that you pick your sauce options:

// 1. White sauce
// 2. Red sauce
// 3. Double red sauce € 1,00
// 4. Mix it up € 1,50 

// After that you pick one or more toppings:

// 1. Pineapple
// 2. Corn
// 3. Olives (green)
// 4. Red union
// 5. Spinach
// 6. Cherry tomatoes
// 7. Chicken

export const toppings = [
  "Pineapple",
  "Corn",
  "Olives (green)",
  "Red onion",
  "Spinach",
  "Cherry tomatoes",
  "Chicken"
]

export const bases = {
  "25cm NY Style": 8.99,
  "30cm NY Style": 11.49,
  "35cm NY Style": 13.49,
  "20cm NY Style": 6.45
}

export const sauces = {
  "White sauce": 0,
  "Red sauce": 0,
  "Double red sauce": 1,
  "Mix it up": 1.5
}

export const getBasePrice = (base) => {
  return bases[base]
}

export const getSaucePrice = (sauce) => {
  return sauces[sauce]
}

export const calculatePrice = (base ,sauce ,toppings, turbo) => {
  let basePrice = 0
  let saucePrice = 0
  let totalToppingsCost = 0
  if(base !== '')
  {
    basePrice = bases[base]
  }
  if(sauce !== '')
  {
    saucePrice = sauces[sauce]
  }
  if(toppings.length > 0)
  {
    totalToppingsCost = toppings.length * 0.5
  }
  const priceBeforeDD = basePrice + saucePrice + totalToppingsCost
  const priceWithDD = priceBeforeDD + (priceBeforeDD * 0.1)
  if(!turbo)
  {
    return priceBeforeDD
  }
  else
  {
    return priceWithDD
  }
}
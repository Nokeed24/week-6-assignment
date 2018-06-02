import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {getBasePrice, getSaucePrice} from '../lib/logic'

export class Summary extends PureComponent {
  constructor(props) {
    super(props);
    const price = this.calculatePrice()
    this.state = {totalPrice: price };
  }

  calculatePrice() {
    const { base, sauce, toppings, turboDD } = this.props 
    const basePrice = getBasePrice(base) 
    const saucePrice = getSaucePrice(sauce)
    const totalToppingsCost = toppings.length * 0.5
    const priceBeforeDD = basePrice + saucePrice + totalToppingsCost
    const priceWithDD = priceBeforeDD + (priceBeforeDD * 0.1)
    console.log("LOGIC - TOTAL PRICE: ", priceBeforeDD)
    console.log("LOGIC - DRONE PRICE: ", priceWithDD)
    if(!turboDD)
    {
      return priceBeforeDD
    }
    else
    {
      return priceWithDD
    }
  }

  render() {
    //console.log(this.state)
    const { base, sauce, toppings, turboDD } = this.props
    const totalPrice = this.calculatePrice()
    // console.log(base, "base")
    // console.log(sauce, "base")
    // console.log(toppings, "base")
    // console.log(turboDD, "base")
    // const listToppings = toppings.map((topping) => 
    //   <li key={topping}>{topping}</li>)
    return (
      <div className="Summary">
        <p>Base Selected: {base}</p>
        <p>Sauce: {sauce}</p>
        <p>Toppings:</p>
        <ul>{toppings.map((topping) => 
      <li key={topping}>{topping}</li>)}</ul>
        <p>Turbo: {turboDD ? <span>YES</span> : <span>NO</span>}</p>
        <p>TOTAL: {totalPrice}</p>
      </div>      
    );
  }
}

const mapStateToProps = ({ base, sauce, toppings, turboDD }) => ({
  base: base,
  sauce: sauce,
  toppings: toppings,
  turboDD: turboDD,
});

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(mapStateToProps)(Summary)
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {calculatePrice} from '../lib/logic'


export class Summary extends PureComponent {
  constructor(props) {
    console.log("CONSTRUCTOR")
    super(props);
    this.state = {totalPrice: 0 };
  }

  componentDidUpdate() {
    console.log("DID UPDATE!!!!")
    const { price } = this.props
    this.setState({totalPrice: price})
  }

  render() {
    console.log("ALL UPDATED")
    const { base, sauce, toppings, turboDD, price } = this.props
    const totalPrice = price.toFixed(2)
    //const price = totalPrice.toFixed(2)
    return (
      <div className="Summary">
        {/* <p>Base Selected:<br></br>{base}</p>
        <p>Sauce: <br></br>{sauce}</p>
        <p>Number of Toppings (3 max, 0,5 each): {toppings.length}</p>
        {<ul>{toppings.map((topping) => <li key={topping}>{topping}</li>)}</ul>}
        <p>Turbo: {turboDD ? <span>YES</span> : <span>NO</span>}</p> */}
        <p>TOTAL: {isNaN(totalPrice) ? 0 : totalPrice}</p>
      </div>      
    );
  }
}

const mapStateToProps = ({ base, sauce, toppings, turboDD }) => ({
  base: base,
  sauce: sauce,
  toppings: toppings,
  turboDD: turboDD,
  price: calculatePrice(base,sauce,toppings,turboDD)
});

export default connect(mapStateToProps)(Summary)
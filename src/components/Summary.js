import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {getBasePrice, getSaucePrice, calculatePrice} from '../lib/logic'


export class Summary extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {totalPrice: 0 };
  // }

  render() {
    const { base, sauce, toppings, turboDD } = this.props
    const totalPrice = calculatePrice(base, sauce, toppings, turboDD)
    const price = totalPrice.toFixed(2)
    return (
      <div className="Summary">
        <p>Base Selected:<br></br>{base}</p>
        <p>Sauce: <br></br>{sauce}</p>
        <p>Toppings:</p>
        <table className="toppings">
        <tbody>
        {toppings.map((topping) => <tr key={topping}><td>{topping}</td></tr>)}
        </tbody>
        </table>
        {/* <ul>{toppings.map((topping) => <li key={topping}>{topping}</li>)}</ul> */}
        <p>Turbo: {turboDD ? <span>YES</span> : <span>NO</span>}</p>
        <p>TOTAL: {isNaN(price) ? 0 : price}</p>
      </div>      
    );
  }
}

const mapStateToProps = ({ base, sauce, toppings, turboDD }) => ({
  base: base,
  sauce: sauce,
  toppings: toppings,
  turboDD: turboDD
});

export default connect(mapStateToProps)(Summary)
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {calculatePrice} from '../lib/logic'


export class Summary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {totalPrice: 0 };
  }

  componentDidUpdate() {
    const { price } = this.props
    this.setState({totalPrice: price})
  }

  render() {
    const { price } = this.props
    const totalPrice = price.toFixed(2)
    return (
      <div className="Summary">
        <p>YOUR TOTAL: {isNaN(totalPrice) ? 0 : totalPrice}</p>
      </div>      
    );
  }
}

const mapStateToProps = ({ base, sauce, toppings, turboDD }) => ({
  price: calculatePrice(base,sauce,toppings,turboDD)
});

export default connect(mapStateToProps)(Summary)
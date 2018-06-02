import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectTopping } from '../actions/pizza'

export class ToppingSelection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {toppings: []};

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let selectedTopping = event.target.value
    console.log(selectedTopping)
    let newtoppings = this.state.toppings
    newtoppings.push(event.target.value)
    this.setState({toppings: newtoppings})
    this.props.selectTopping(newtoppings)    
  }

  render() {
    return (
      <div className="ToppingSelection">
        <h2>SELECT YOUR TOPPINGS (3 MAXIMUM)</h2>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="radio">
            <label>
              <input type="radio" value="Pineapple"/>
              Pineapple
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Corn" />
              Corn
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Olives (green)" />
              Olives (green)
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Red union" /*checked={this.state.toppings.includes("Red union")}*//>
              Red union € 1,50
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Spinach" />
              Spinach
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Cherry tomatoes" />
              Cherry tomatoes
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Chicken" />
              Chicken
            </label>
          </div>
        </form>
      </div>      
    );
  }
}

const mapStateToProps = ({ base }) => ({
  base
});

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(mapStateToProps, {selectTopping})(ToppingSelection)
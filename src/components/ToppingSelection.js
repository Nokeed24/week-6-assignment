import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectTopping } from '../actions/pizza'
import { toppings } from '../lib/logic'
import './ToppingSelection.css'

export class ToppingSelection extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {toppings: []}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let selectedTopping = event.target.value
    let statetoppings = this.state.toppings
    if (statetoppings.includes(selectedTopping)){
      const newToppings = statetoppings.filter(topping => topping !== selectedTopping)
      this.setState({toppings: newToppings})  
      this.props.selectTopping(statetoppings) 
      event.target.value = ''
    }
    else{
      if(statetoppings.length <= 2)
      {
        const newToppings = [...statetoppings, event.target.value]
        this.setState({toppings: newToppings})
        this.props.selectTopping(newToppings)          
        event.target.value = ''
      }
      else
      {
        alert("You can choose a maximum of 3 toppings")
        event.preventDefault()
        return        
      }
    }
  }

  render() {
    return (
      <div className="ToppingSelection">
        <h2>SELECT YOUR TOPPINGS (3 MAXIMUM)</h2>
        <form >
          {toppings.map(topping => {
              return (
                <label key ={topping} className="topping">
                  <input
                    type="checkbox"
                    value={topping}
                    onChange={this.handleChange.bind(this)}
                  />
                  <div>{topping}</div>
                </label>
              )
            })}          
        </form>
      </div>      
    );
  }
}


export default connect(null, {selectTopping})(ToppingSelection)
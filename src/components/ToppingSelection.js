import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectTopping } from '../actions/pizza'
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
      const newToppings = statetoppings.filter(topping => topping !== event.target.value)
      console.log(newToppings, "AFTER POP")
      this.setState({toppings: newToppings})  
      this.props.selectTopping(statetoppings) 
      event.target.value = ''
    }
    else{
      if(statetoppings.length <= 2)
      {
        const newToppings = [...statetoppings, event.target.value]
        console.log(newToppings, "AFTER PUSH")
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
    //this.setState({toppings: statetoppings})
    console.log(statetoppings, "THIS GOES TO STORE")
    
  }

  render() {
    return (
      <div className="ToppingSelection">
        <h2>SELECT YOUR TOPPINGS (3 MAXIMUM)</h2>
        <form onChange={this.handleChange}>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Pineapple" />
              Pineapple
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Corn" />
              Corn
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Olives (green)" />
              Olives (green)
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Red union" />
              Red union 
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Spinach" />
              Spinach
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Cherry tomatoes" />
              Cherry tomatoes
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Chicken" />
              Chicken
            </label>
          </div>
        </form>
      </div>      
    );
  }
}


//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(null, {selectTopping})(ToppingSelection)
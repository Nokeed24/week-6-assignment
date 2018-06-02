import React, { PureComponent } from 'react'
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
    let statetoppings = this.state.toppings
    if (this.state.toppings.includes(selectedTopping)){
      //this.validateToppings(selectedTopping, true)
      statetoppings.pop(selectedTopping)
      this.setState({toppings: statetoppings})
    }
    else{
      //this.validateToppings(selectedTopping)
      statetoppings.push(selectedTopping)
      this.setState({toppings: statetoppings})
    }
    console.log(this.state.toppings)
    this.props.selectTopping(this.state.toppings)
  }

  render() {
    return (
      <div className="ToppingSelection">
        <h2>SELECT YOUR TOPPINGS (3 MAXIMUM)</h2>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="Pineapple" checked={this.state.toppings.includes("Pineapple") && this.state.toppings.length <= 3} onChange={this.handleChange}/>
              Pineapple
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Corn" checked={this.state.toppings.includes("Corn")} onChange={this.handleChange}/>
              Corn
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Olives (green)" checked={this.state.toppings.includes("Olives (green)")} onChange={this.handleChange}/>
              Olives (green)
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Red union" checked={this.state.toppings.includes("Red union")} onChange={this.handleChange}/>
              Red union 
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Spinach" checked={this.state.toppings.includes("Spinach")} onChange={this.handleChange}/>
              Spinach
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Cherry tomatoes" checked={this.state.toppings.includes("Cherry tomatoes")} onChange={this.handleChange}/>
              Cherry tomatoes
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Chicken" checked={this.state.toppings.includes("Chicken")} onChange={this.handleChange}/>
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
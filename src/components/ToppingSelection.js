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
      statetoppings.pop(selectedTopping)
      this.setState({toppings: statetoppings})
    }
    else{
      //console.log(statetoppings.length, "LENGTH")
      if(statetoppings.length <= 2)
      {
        statetoppings.push(selectedTopping)
        this.setState({toppings: statetoppings})
      }
      
    }
    //console.log(this.state.toppings)
    this.props.selectTopping(this.state.toppings)
  }

  render() {
    const statetoppings = this.state.toppings
    return (
      <div className="ToppingSelection">
        <h2>SELECT YOUR TOPPINGS (3 MAXIMUM)</h2>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="Pineapple" checked={statetoppings.includes("Pineapple")} onChange={this.handleChange}/>
              Pineapple
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Corn" checked={statetoppings.includes("Corn")} onChange={this.handleChange}/>
              Corn
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Olives (green)" checked={statetoppings.includes("Olives (green)")} onChange={this.handleChange}/>
              Olives (green)
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Red union" checked={statetoppings.includes("Red union")} onChange={this.handleChange}/>
              Red union 
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Spinach" checked={statetoppings.includes("Spinach")} onChange={this.handleChange}/>
              Spinach
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Cherry tomatoes" checked={statetoppings.includes("Cherry tomatoes")} onChange={this.handleChange}/>
              Cherry tomatoes
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Chicken" checked={statetoppings.includes("Chicken")} onChange={this.handleChange}/>
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
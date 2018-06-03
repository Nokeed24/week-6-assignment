import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectTopping } from '../actions/pizza'

export class ToppingSelection extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {toppings: []}
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    let selectedTopping = event.target.value
    let statetoppings = this.state.toppings
    if (this.state.toppings.includes(selectedTopping)){
      statetoppings.pop(selectedTopping)
      console.log(statetoppings, "AFTER POP -----")
      //this.setState({toppings: statetoppings})   
    }
    else{
      console.log(statetoppings.length, "LENGTH")
      if(statetoppings.length <= 2)
      {
        statetoppings.push(selectedTopping) 
      }
      
    }
    this.setState({toppings: statetoppings})
    console.log(this.state.toppings, "THIS GOES TO STORE")
    this.props.selectTopping(this.state.toppings)
  }

  render() {
    const { toppings } = this.props
    return (
      <div className="ToppingSelection">
        <h2>SELECT YOUR TOPPINGS (3 MAXIMUM)</h2>
        <form onChange={this.handleChange}>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Pineapple" checked={toppings.includes("Pineapple")} />
              Pineapple
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Corn" checked={toppings.includes("Corn")} />
              Corn
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Olives (green)" checked={toppings.includes("Olives (green)")} />
              Olives (green)
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Red union" checked={toppings.includes("Red union")} />
              Red union 
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Spinach" checked={toppings.includes("Spinach")} />
              Spinach
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Cherry tomatoes" checked={toppings.includes("Cherry tomatoes")} />
              Cherry tomatoes
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Chicken" checked={toppings.includes("Chicken")}/>
              Chicken
            </label>
          </div>
        </form>
      </div>      
    );
  }
}

const mapStateToProps = ({ toppings }) => ({
  toppings: toppings
});

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(mapStateToProps, {selectTopping})(ToppingSelection)
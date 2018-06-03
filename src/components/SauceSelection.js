import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSauce } from '../actions/pizza'

export class SauceSelection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {sauce: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let SelectedSauce = event.target.value
    this.setState({sauce: SelectedSauce})
    this.props.selectSauce(SelectedSauce)    
  }

  render() {
    return (
      <div className="SauceSelection">
      <h2>SELECT YOUR SAUCE</h2>
        <form onChange={this.handleChange}>
        <div className="radio">
          <label>
            <input type="radio" value="White sauce" checked={this.state.sauce === 'White sauce'}/>
            White sauce
          </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="Red sauce" checked={this.state.sauce === 'Red sauce'}/>
          Red sauce
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="Double red sauce" checked={this.state.sauce === 'Double red sauce'}/>
          Double red sauce € 1,00
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="Mix it up" checked={this.state.sauce === 'Mix it up'}/>
          Mix it up € 1,50
        </label>
      </div>
      </form>
      </div>      
    );
  }
}

// const mapStateToProps = ({ base }) => ({
//   base
// });

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(null, {selectSauce})(SauceSelection)
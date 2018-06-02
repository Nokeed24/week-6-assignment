import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectBase } from '../actions/pizza'
import './BaseSelection.css'

export class BaseSelection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {base: 'none'};

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let SelectedBase = event.target.value
    console.log(SelectedBase)
    this.setState({base: event.target.value})
    this.props.selectBase(SelectedBase)    
  }

  render() {
    return (
      <div className="BaseSelection">
      <h2>SELECT YOUR BASE</h2>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="radio">
            <label>
              <input type="radio" value="25cm NY Style" checked={this.state.base === '25cm NY Style'}/>
              25cm NY Style € 8,99
            </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="30cm NY Style" checked={this.state.base === '30cm NY Style'}/>
            30cm NY Style € 11,49
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="35cm NY Style" checked={this.state.base === '35cm NY Style'}/>
            35cm NY Style € 13,49
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="20cm NY Style" checked={this.state.base === '20cm NY Style'}/>
            20cm NY Style € 6,45
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
export default connect(mapStateToProps, {selectBase})(BaseSelection)
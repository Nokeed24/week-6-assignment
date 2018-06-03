import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectTurbo } from '../actions/pizza'

export class TurboSelection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {turbo: false};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const turboTrue = event.target.value === 'true' ? true : false
    this.setState({turbo: turboTrue})
    this.props.selectTurbo(turboTrue)    
  }

  render() {
    const turbo = this.state.turbo
    return (
      <div className="TurboSelection">
      <p>Would you like to benefit from our turbo-drone-delivery for just an extra 10%?</p>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="radio">
          <label>
            <input type="radio" value="true" checked={turbo === true} onChange={this.handleChange}/>
            YES
          </label>
      </div>
      <div className="radio">
          <label>
            <input type="radio" value="false" checked={turbo === false} onChange={this.handleChange}/>
            NO
          </label>
      </div>
      </form>
      </div>      
    );
  }
}

// const mapStateToProps = ({ turboDD }) => ({
//   turboDD
// });

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(null, {selectTurbo})(TurboSelection)
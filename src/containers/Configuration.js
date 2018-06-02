import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectBase } from '../actions/pizza'
import BaseSelection from '../components/BaseSelection'
import SauceSelection from '../components/SauceSelection'
import ToppingSelection from '../components/ToppingSelection'
import TurboSelection from '../components/TurboSelection';
import './Configuration.css'

export class Configuration extends PureComponent {
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
      <div className="configuration">
        <BaseSelection />
        <SauceSelection />
        <ToppingSelection /> 
        <TurboSelection />   
      </div>
    )
  }
}

const mapStateToProps = ({ base, sauce, toppings, turboDD }) => ({
  base,
  sauce,
  toppings,
  turboDD
});

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(mapStateToProps, null)(Configuration)
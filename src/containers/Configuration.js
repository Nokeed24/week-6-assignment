import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BaseSelection from '../components/BaseSelection'
import SauceSelection from '../components/SauceSelection'
import ToppingSelection from '../components/ToppingSelection'
import TurboSelection from '../components/TurboSelection';
import Summary from '../components/Summary'
import './Configuration.css'

export class Configuration extends PureComponent {

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

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default Configuration
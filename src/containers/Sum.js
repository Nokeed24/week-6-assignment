import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Summary from '../components/Summary'
import './Configuration.css'

export class Sum extends PureComponent {

  render() {
    return (
      <div className="configuration">
        <Summary /> 
      </div>
    )
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default Sum
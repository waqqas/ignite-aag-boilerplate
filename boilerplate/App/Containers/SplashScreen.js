import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../Redux/AppRedux'
import { getStartupStatus } from '../Redux/StartupRedux'
import { Screen } from '../Themes/ApplicationStyles'

class SplashScreen extends Component {

  constructor (props) {
    super(props)

    this.state = {
      needsLogin: false
    }

  }

  componentDidMount () {
    if (this.props.startupSuccess === true) {
      if (this.props.user === null) {
        this.setState({needsLogin: true})
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.startupSuccess === true) {
      if (nextProps.user === null) {
        this.setState({needsLogin: true})
      }
    }
  }

  render () {
    return (
      <Screen>
      </Screen>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    startupSuccess: getStartupStatus(state)
  }
}
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)

import React, {Component} from 'react'
import * as ReactNavigation from 'react-navigation'
import {connect} from 'react-redux'
import AppNavigation from './AppNavigation'

import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';

class ReduxNavigation extends Component {

  componentWillMount() {
    this.addListener = createReduxBoundAddListener("root");
  }

  render() {
    const {dispatch, nav} = this.props

    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav,
      addListener: this.addListener
    })

    return <AppNavigation navigation={navigation}/>

  }
}

const mapStateToProps = state => ({nav: state.nav})

export default connect(mapStateToProps)(ReduxNavigation)

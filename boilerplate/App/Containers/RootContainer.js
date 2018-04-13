import React, {Component} from 'react';
import {View} from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import {connect} from 'react-redux';
// Styles
import StartupActions from '../Redux/StartupRedux';
import AuthActions from '../Redux/AuthRedux';
import ReduxPersist from '../Config/ReduxPersist';

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startupSuccess !== this.props.startupSuccess) {
    }
  }

  render() {

    return (
      <View style={{flex:1}}>
        <ReduxNavigation/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startupSuccess: state.startup.success,
  };
};
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  loginUserSuccess: () => dispatch(AuthActions.loginUserSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);

// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/modules/actions';
import CustomerManager from './CustomerManager';

const mapStateToProps = state => {
  return {
    currentView: state.views.currentView,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        enterCustomerManager: actions.enterCustomerManager,
        leaveCustomerManager: actions.leaveCustomerManager,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerManager);

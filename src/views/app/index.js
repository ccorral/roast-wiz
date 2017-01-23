import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions, getAuth } from 'src/core/auth';
import { createSelector } from 'reselect';
import { paths } from '../routes';
import SiteHeader from '../components/header';

import AppShell from 'grommet/components/App';

export class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    const { router } = this.context;
    const { auth } = this.props;

    if (auth.authenticated && !nextProps.auth.authenticated) {
      router.replace(paths.SIGN_IN);
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      router.replace(paths.DASHBOARD);
    }
  }

  render() {
    const { auth } = this.props
    return (
      <AppShell inline={true}>
        {auth.authenticated &&
          <SiteHeader
            authenticated={this.props.auth.authenticated}
            signOut={this.props.signOut}
          />}
        <div>{this.props.children}</div>
      </AppShell>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getAuth,
  auth => ({auth})
);

export default connect(
  mapStateToProps,
  authActions
)(App);

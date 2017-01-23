import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'src/core/auth';

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

export function Dashboard({ signInWithGoogle }) {
  return (
    <div />
  );
}

Dashboard.propTypes = {
  signInWithGoogle: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(Dashboard);

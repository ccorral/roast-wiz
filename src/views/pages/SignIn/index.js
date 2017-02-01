import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'src/core/auth';

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';


export function SignIn({ signInWithGoogle }) {
  return (
    <Box flex={true} justify="center" align="center" pad="medium" margin="small">
        <h1 className="sign-in__heading">Sign in</h1>
        <Button onClick={signInWithGoogle} label="Google" />
    </Box>
  );
}

SignIn.propTypes = {
  signInWithGoogle: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(SignIn);

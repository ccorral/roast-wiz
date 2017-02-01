import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Pulse from 'grommet/components/icons/Pulse';

import Anchor from 'grommet/components/Anchor';
import NewIcon from 'grommet/components/icons/base/new';

const NewRoast = ({authenticated, signOut}) => {
  return (
    <Header size="medium">
      <Title>
        <Link to={'/'}>
            Roast Wiz
        </Link>
      </Title>
      <Box flex={true} justify='end' direction='row' responsive={false} pad="small">
        {/*<Search inline={true} fill={true} size='medium' placeHolder='Search' dropAlign={{"right": "right"}} />*/}
        <Link to={'/new/roast'}>
        <Anchor icon={<NewIcon />}
          label='New Roast'
          animateIcon={true}
          href='#'
          primary={false}
          reverse={false}
          disabled={false}
          style={{padding: '8px'}} />
      </Link>
      <Link to={'/new/bean'}>
        <Anchor icon={<NewIcon />}
          label='New Bean'
          animateIcon={true}
          href='#'
          primary={false}
          reverse={false}
          disabled={false}
          style={{padding: '8px'}} />
        </Link>
        {authenticated ? <Button onClick={signOut} style={{paddingLeft: '20px'}}>Sign out</Button> : null}
      </Box>
    </Header>
  );
};

NewRoast.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default NewRoast;

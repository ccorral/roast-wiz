import React, { PropTypes } from 'react';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';

const SiteHeader = ({authenticated, signOut}) => {
  return (
    <Header size="small">
      <Title>
        Sample Title
      </Title>
      <Box flex={true} justify='end' direction='row' responsive={false} pad="small">
        <Search inline={true} fill={true} size='medium' placeHolder='Search' dropAlign={{"right": "right"}} />
        {authenticated ? <Button onClick={signOut}>Sign out</Button> : null}
      </Box>
    </Header>
  );
};

SiteHeader.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default SiteHeader;

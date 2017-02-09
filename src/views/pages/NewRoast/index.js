import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { authActions } from 'src/core/auth';

import { beanActions, getBeans, isFetchingBeans, getBeanDetail, getBeanRoastList } from 'src/core/beans';
import { roastActions, getRoasts, isFetchingRoasts, getRoastDetail, getBeanForRoast } from 'src/core/roasts';

import BeanDescription from '../../components/BeanDescription';
import Timer from '../../components/Timer';
import RoastControls from '../../components/RoastControls';

import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';

export function NewRoast(props) {
    return (
          <Box align='center' full='vertical' >
            <Timer>
                <RoastControls />
            </Timer>
            <Section pad='small' margin='medium' style={{width: '100%', height: '400px', backgroundColor: '#f6f6f6'}} />
          </Box>
    );
}

NewRoast.propTypes = {

};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NewRoast);

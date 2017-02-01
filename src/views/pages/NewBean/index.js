import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { authActions } from 'src/core/auth';

import { beanActions, getBeans, isFetchingBeans, getBeanDetail, getBeanRoastList } from 'src/core/beans';
import { roastActions, getRoasts, isFetchingRoasts, getRoastDetail, getBeanForRoast } from 'src/core/roasts';

import BeanDescription from '../../components/BeanDescription';

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Spinning from 'grommet/components/icons/Spinning';
import Value from 'grommet/components/Value';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';

import { isEmpty } from 'lodash';

export function NewBean(props) {
    console.log(props);
    return (
          <Article>
          </Article>
    );
}

NewBean.propTypes = {

};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NewBean);

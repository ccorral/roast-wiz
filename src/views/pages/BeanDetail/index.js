import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { beanActions, getBeans, isFetchingBeans, getBeanDetail, getBeanRoastList } from 'src/core/beans';
import { roastActions, getRoasts, isFetchingRoasts } from 'src/core/roasts';

import RecentRoastList from '../../components/RecentRoastList';
import BeanDescription from '../../components/BeanDescription';

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Spinning from 'grommet/components/icons/Spinning';
import Anchor from 'grommet/components/Anchor';
import Edit from 'grommet/components/icons/base/Edit';

import { isEmpty } from 'lodash';

export function BeanDetail(props) {
    const loading = isEmpty(props.bean)
    return (
      loading ?
          <Box align='center' full='vertical' justify='center'>
              <Spinning />
          </Box> :
          <Article>
          <Heading strong={false}
            uppercase={true}
            truncate={false}
            align='center'
            margin='small'
            tag='h2'>
            {props.bean.name}
          </Heading>
          <Box align='center'>
              <Paragraph style={{textAlign: 'center'}}>
                {props.bean.description}
              </Paragraph>
              <Anchor icon={<Edit />}
                label='Edit'
                animateIcon={true}
                path='/edit/bean'
                primary={false}
                reverse={false}
                disabled={false}
                style={{padding: '8px'}} />
          </Box>
          <Split>
              <BeanDescription {...props} />
              <RecentRoastList beanList={props.beanList} roastList={props.roasts} />
          </Split>
      </Article>
    );
}

BeanDetail.propTypes = {

};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
    bean: getBeanDetail(state, ownProps.params.id),
    beanList: getBeans(state),
    roasts: getBeanRoastList(state, ownProps.params.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeanDetail);

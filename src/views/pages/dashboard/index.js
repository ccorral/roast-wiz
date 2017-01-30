import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { beanActions, getBeans, isFetchingBeans } from 'src/core/beans';
import { roastActions, getRoasts, isFetchingRoasts } from 'src/core/roasts';

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Spinning from 'grommet/components/icons/Spinning';

import RecentRoastList from '../../components/RecentRoastList';
import BeanList from '../../components/BeanList';

import { values } from 'lodash';

export class Dashboard extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { fetchBeans, fetchRoasts } = this.props
        fetchBeans()
        fetchRoasts()
    }

    render() {
        const { beanList, isFetchingBeans, roastList, isFetchingRoasts } = this.props
        const roasts = values(roastList)
        return (
         (isFetchingBeans || isFetchingRoasts) ?
             <Box align='center' full='vertical' justify='center'>
                 <Spinning />
             </Box> :
             <div>
                 <Split>
                     <RecentRoastList beanList={beanList} roastList={roasts} />
                     <BeanList beanList={beanList} />
                 </Split>
             </div>
        );
    }

}

Dashboard.propTypes = {
    beanList: PropTypes.object.isRequired,
    isFetchingBeans: PropTypes.bool.isRequired,
    roastList: PropTypes.object.isRequired,
    isFetchingRoasts: PropTypes.bool.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getBeans,
  isFetchingBeans,
  getRoasts,
  isFetchingRoasts,
  (beanList, isFetchingBeans, roastList, isFetchingRoasts) => ({
    beanList,
    isFetchingBeans,
    roastList,
    isFetchingRoasts
  })
);

const mapDispatchToProps = Object.assign(
  {},
  beanActions,
  roastActions
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

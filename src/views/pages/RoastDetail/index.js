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

import Chart, {Axis, Grid, Area, Bar, Line, Marker, MarkerLabel, HotSpots, Base, Layers} from 'grommet/components/chart/Chart';

import Anchor from 'grommet/components/Anchor';
import Edit from 'grommet/components/icons/base/Edit';
import Copy from 'grommet/components/icons/base/Copy';

import { isEmpty } from 'lodash';

export function RoastDetail(props) {
    console.log(props);
    const loading = isEmpty(props.roast)
    let date_formatted = new Date(props.roast.date).toLocaleDateString("en-US")
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
                {props.roast.notes}<br/>
                {date_formatted}
              </Paragraph>
            <Box align='center' flex={true} direction="row" pad="small" justify='center'>
              <Anchor icon={<Edit />}
                label='Edit'
                animateIcon={true}
                href='#'
                primary={false}
                reverse={false}
                disabled={false}
                style={{padding: '8px'}} />
            <Anchor icon={<Copy />}
                label='Duplicate Roast'
                animateIcon={true}
                href='#'
                primary={false}
                reverse={false}
                disabled={false}
                style={{padding: '8px'}} />
            </Box>
              <Section colorIndex={'light-2'} style={{width: '100%', height: '320px'}}></Section>
              <Section style={{width: '100%', height: '320px'}}>
                  <Split>
                      <Section>
                          <Label size={'small'} uppercase={true} margin={'small'}>
                              Roast Duration
                          </Label>
                          <span>
                              {props.roast.roast_duration}
                          </span>
                          <Label size={'small'} uppercase={true} margin={'small'}>
                              Start Temp
                          </Label>
                          <span>
                              {props.roast.start_temp}
                          </span>
                          <Label size={'small'} uppercase={true} margin={'small'}>
                              End Temp
                          </Label>
                          <span>
                              {props.roast.end_temp}
                          </span>
                          <Label size={'small'} uppercase={true} margin={'small'}>
                              Weigh In
                          </Label>
                          <span>
                              {props.roast.weight_in}
                          </span>
                          <Label size={'small'} uppercase={true} margin={'small'}>
                              Weight Out
                          </Label>
                          <span>
                              {props.roast.weight_out}
                          </span>
                          <Label size={'small'} uppercase={true} margin={'small'}>
                              Shrink Percentage
                          </Label>
                          <span>
                              {props.roast.shrink_percentage}
                          </span>
                      </Section>
                      <Section>
                          <BeanDescription {...props} />
                      </Section>
                  </Split>
              </Section>
          </Box>
      </Article>
    );
    // return (
    // <div>
    //     <Chart>
    //       <Axis count={5}
    //         labels={[{"index": 2, "label": "50"}, {"index": 4, "label": "100"}]}
    //         vertical={true} />
    //       <Chart vertical={true}>
    //         <MarkerLabel count={12}
    //           index={11}
    //           label={<Value value={50} />} />
    //         <Base height='medium'
    //           width='medium' />
    //         <Layers>
    //           <Grid rows={5}
    //             columns={3} />
    //           <Area values={[50, 45, 30, 35, 0, 5, 10, 15, 75, 80, 90, 100]}
    //             colorIndex='graph-1'
    //             activeIndex={11} />
    //           <Bar values={[45, 25, 60, 12, 35, , 10, 45, 60, 85, 70, 20]}
    //             colorIndex='graph-2'
    //             activeIndex={11} />
    //           <Line values={[100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50]}
    //             colorIndex='accent-1'
    //             activeIndex={11} />
    //           <Marker colorIndex='graph-2'
    //             count={12}
    //             vertical={true}
    //             index={11} />
    //           <HotSpots count={12}
    //             max={100}
    //             activeIndex={11}
    //             onActive={() => {}} />
    //         </Layers>
    //         <Axis count={2}
    //           labels={[{"index": 0, "label": "2012"}, {"index": 1, "label": "2015"}]} />
    //       </Chart>
    //     </Chart>
    // </div>
    // );
}

RoastDetail.propTypes = {

};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
    roast: getRoastDetail(state, ownProps.params.id),
    bean: getBeanForRoast(state, ownProps.params.id),
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RoastDetail);

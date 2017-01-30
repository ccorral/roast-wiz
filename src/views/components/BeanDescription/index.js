import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';

import { database } from '../../../core/beans/tmp.js';

import { values } from 'lodash';

const BeanDescription = (props) => {
    console.log(props);
    return (
      <div>
          <Box>
              <Label size={'small'} uppercase={true} margin={'small'}>
                  Origin
              </Label>
              <span>
                  {props.bean.origin}
              </span>
              <Label size={'small'} uppercase={true} margin={'small'}>
                  Region
              </Label>
              <span>
                  {props.bean.region}
              </span>
              <Label size={'small'} uppercase={true} margin={'small'}>
                  Process
              </Label>
              <span>
                  {props.bean.wash_process}
              </span>
              <Label size={'small'} uppercase={true} margin={'small'}>
                  Variety
              </Label>
              <span>
                  {props.bean.variety}
              </span>
              <Label size={'small'} uppercase={true} margin={'small'}>
                  Roast Suggestion
              </Label>
              <span>
                  {props.bean.roast_suggestion}
              </span>
          </Box>
      </div>
    );
};

BeanDescription.propTypes = {

};

export default BeanDescription;

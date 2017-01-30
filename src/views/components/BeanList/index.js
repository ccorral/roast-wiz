import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Label from 'grommet/components/Label';

import { values } from 'lodash';

const BeanList = ({ beanList }) => {
    const beans = values(beanList).map(bean => {
        return (
            <TableRow key={bean.id}>
              <td><Link to={`bean/${bean.id}`}>{bean.name}</Link></td>
              <td>{bean.origin}</td>
              <td className='secondary'>{bean.process}</td>
              <td style={{textAlign: 'center'}}>{Object.keys(bean.roasts).length}</td>
            </TableRow>
        )
    })
    return (
      <div>
          <Label size={'small'} uppercase={true} margin={'large'}>
              Beans
          </Label>
          <Table selectable={true} onSelect={() => {}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Origin</th>
                  <th>Process</th>
                  <th>Roasts</th>
                </tr>
              </thead>
              <tbody>
                  {beans}
              </tbody>
            </Table>
      </div>
    );
};

BeanList.propTypes = {
    beanList: PropTypes.object.isRequired
};

export default BeanList;

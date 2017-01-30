import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Label from 'grommet/components/Label';

const RecentRoastList = ({ beanList, roastList }) => {
    const roasts = roastList.map(roast => {
        let date_formatted = new Date(roast.date).toLocaleDateString("en-US")
        return (
            <TableRow key={roast.id}>
              <td><Link to={`roast/${roast.id}`}>{beanList[roast.bean_id].name}</Link></td>
              <td className='secondary'>{date_formatted}</td>
              <td>{roast.notes}</td>
            </TableRow>
        )
    })
  return (
      <div>
          <Label size={'small'} uppercase={true} margin={'large'}>
              Recent Roasts
          </Label>
          <Table selectable={true} onSelect={() => {}}>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {roasts}
              </tbody>
            </Table>
      </div>
  );
};

RecentRoastList.propTypes = {
    beanList: PropTypes.object.isRequired,
    roastList: PropTypes.array.isRequired
};

export default RecentRoastList;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MucTableHead from './MucTableHead';
import { tableCharHead } from '../constants/ConstTable';

const handleRequestSort = (event: any, property: string) => {};
const handleSelectAllClick = (event: any) => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MucTableHead
      numSelected={10}
      order={'desc' as 'asc' | 'desc'}
      orderBy={'test'}
      onSelectAllClick={handleSelectAllClick}
      onRequestSort={handleRequestSort}
      rowCount={10}
      rows={tableCharHead}
    />,
    div);
  ReactDOM.unmountComponentAtNode(div);
});

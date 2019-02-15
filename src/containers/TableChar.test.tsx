import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TableChar from './TableChar';

const testFunction = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableChar closeFunction={testFunction} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

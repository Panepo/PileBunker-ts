import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MenuQuery from './MenuQuery';

const testFunction = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuQuery statusDialog={true} statusFunction={testFunction} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

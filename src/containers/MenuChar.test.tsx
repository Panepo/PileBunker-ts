import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MenuChar from './MenuChar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuChar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

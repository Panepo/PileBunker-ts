import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MenuBuff from './MenuBuff';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuBuff />, div);
  ReactDOM.unmountComponentAtNode(div);
});

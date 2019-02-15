import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MenuEnemy from './MenuEnemy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuEnemy />, div);
  ReactDOM.unmountComponentAtNode(div);
});

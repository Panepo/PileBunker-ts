import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pilebunker from './Pilebunker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pilebunker />, div);
  ReactDOM.unmountComponentAtNode(div);
});

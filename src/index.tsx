import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReduxRoot from './ReduxRoot';
import registerServiceWorker from './serviceWorker';

const rootEl = document.getElementById('pilebunker');
ReactDOM.render(<ReduxRoot />, rootEl);

if (module.hot) {
  module.hot.accept('./ReduxRoot', () => {
    const NextApp = require('./ReduxRoot').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}

registerServiceWorker();

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ReduxRoot from './ReduxRoot'
import registerServiceWorker from './serviceWorker'
import * as ReactGA from 'react-ga'

const rootEl = document.getElementById('pilebunker')
ReactDOM.render(<ReduxRoot />, rootEl)

ReactGA.initialize('UA-106126363-1')
ReactGA.pageview(window.location.pathname + window.location.search)

if (module.hot) {
  module.hot.accept('./ReduxRoot', () => {
    const NextApp = require('./ReduxRoot').default
    ReactDOM.render(<NextApp />, rootEl)
  })
}

registerServiceWorker()

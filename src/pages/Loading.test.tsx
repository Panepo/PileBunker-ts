import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Loading from './Loading'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Loading />, div)
  ReactDOM.unmountComponentAtNode(div)
})

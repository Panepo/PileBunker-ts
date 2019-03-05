import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MucToggleButton from './MucToggleButton'

const testFunction = () => {}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MucToggleButton
      modelKey={'test'}
      modelSwitch={'test'}
      modelTitle={'test'}
      modelId={'test'}
      modelFunction={testFunction}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

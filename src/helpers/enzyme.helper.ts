import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const shallowWithStore = (component: any, store: any) => {
  const context = {
    store
  }
  return shallow(component, { context })
}

export default shallowWithStore

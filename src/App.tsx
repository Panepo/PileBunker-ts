import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Route, RouteComponentProps } from 'react-router'
import { history } from './configureStore'
import { ConnectedRouter } from 'connected-react-router'
import Header from './pages/Header'
import Ribbon from './pages/Ribbon'
import Footer from './pages/Footer'
import Loading from './pages/Loading'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import withRoot from './withRoot'

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  }
})

export interface Props
  extends RouteComponentProps<void>,
    WithStyles<typeof styles> {}

// Lazy component
const PileBunker = React.lazy(() => import('./pages/pilebunker/PileBunker'))

const routes = () => {
  return (
    <React.Suspense fallback={Loading}>
      <Route exact={true} path="/" component={PileBunker} />
      <Route path="/pilebunker" component={PileBunker} />
    </React.Suspense>
  )
}

const App = (props: Props) => {
  const { classes } = props

  return (
    <ConnectedRouter history={history}>
      <div className={classes.root}>
        <Header />
        <Ribbon />
        {routes()}
        <Footer />
      </div>
    </ConnectedRouter>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
} as any

export default withRoot(withStyles(styles)(App))

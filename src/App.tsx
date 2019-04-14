import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Route, Switch, RouteComponentProps } from 'react-router'
import { history } from './configureStore'
import { ConnectedRouter } from 'connected-react-router'
import Header from './pages/Header'
import Ribbon from './pages/Ribbon'
import Footer from './pages/Footer'
import PileBunker from './pages/pilebunker/PileBunker'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
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

const App = (props: Props) => {
  const { classes } = props

  return (
    <ConnectedRouter history={history}>
      <div className={classes.root}>
        <Header />
        <Ribbon />
        <Switch>
          <Route exact={true} path="/" component={PileBunker} />
          <Route exact={true} path="/pilebunker" component={PileBunker} />
          <Route component={() => <Typography>File not found</Typography>} />
        </Switch>
        <Footer />
      </div>
    </ConnectedRouter>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
} as any

export default withRoot(withStyles(styles)(App))

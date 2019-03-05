import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router'
import { history } from './configureStore'
import { ConnectedRouter } from 'connected-react-router'
import Header from './pages/Header'
import Ribbon from './pages/Ribbon'
import Footer from './pages/Footer'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import withRoot from './withRoot'

export namespace App {
  export interface Props
    extends RouteComponentProps<void>,
      WithStyles<typeof styles> {}
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    }
  })

// Lazy component
const PileBunker = React.lazy(() => import('./pages/pilebunker/PileBunker'))

class App extends React.Component<App.Props> {
  routes = (
    <React.Suspense fallback={<Typography>Loading...</Typography>}>
      <Route exact={true} path="/" component={PileBunker} />
      <Route path="/pilebunker" component={PileBunker} />
    </React.Suspense>
  )

  render() {
    return (
      <ConnectedRouter history={history}>
        <div className={this.props.classes.root}>
          <Header />
          <Ribbon />
          {this.routes}
          <Footer />
        </div>
      </ConnectedRouter>
    )
  }
}

export default withRoot(withStyles(styles)(App))

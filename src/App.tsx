import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import Header from './index/Header';
import Ribbon from './index/Ribbon';
import Footer from './index/Footer';
import Pilebunker from './pages/Pilebunker';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import withRoot from './withRoot';

export namespace App {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
});

class App extends React.Component<App.Props> {
  routes = (
    <div>
      <Route exact={true} path="/" component={Pilebunker} />
      <Route exact={true} path="/pilebunker" component={Pilebunker} />
    </div>
  );

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
    );
  }
}

export default withRoot(withStyles(styles)(App));

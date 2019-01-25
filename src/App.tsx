import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router';
import { history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { RootState } from './reducers/index';

import Header from './index/Header';
import Ribbon from './index/Ribbon';
import Footer from './index/Footer';

import Pilebunker from './pages/Pilebunker';

// import { isSmartphone } from './responsive';

import { createStyles, Theme, WithStyles, withStyles, withWidth } from '@material-ui/core';
import withRoot from './withRoot';
import { WithWidth } from '@material-ui/core/withWidth';

export namespace App {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles>, WithWidth {
    // todoList: Todo[];
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  content: {
    marginTop: '-55vh',
    marginBottom: '60px',
    flex: 1
  }
});

class App extends React.Component<App.Props> {
  routes = (
    <div className={this.props.classes.content}>
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

function mapStateToProps(state: RootState) {
    return {
        todoList: state.todoList
    };
}

export default withRoot(withStyles(styles)(connect(mapStateToProps)(withWidth()(App))));

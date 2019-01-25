import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todo';
import { Todo } from '../model/model';
import { RootState } from '../reducers/index';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

export namespace MenuChar {
  export interface Props extends WithStyles<typeof styles> {
  }

  export interface State {
    expanded: string | boolean;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
});

class MenuChar extends React.Component<MenuChar.Props, MenuChar.State> {
}

function mapStateToProps(state: RootState) {
  return {
    todoList: state.todoList
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuChar));

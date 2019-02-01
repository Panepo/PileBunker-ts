import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todo';
// import { Todo } from '../model/model';
import { RootState } from '../reducers/index';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import MucText from './MucText';

export namespace MenuChar {
  export interface Props extends WithStyles<typeof styles> {
  }
  export interface State {
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
  textBody: {
  },
  button: {
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class MenuChar extends React.Component<MenuChar.Props, MenuChar.State> {
  state = {
  };

  handleChar = () => {
    console.log('FQ');
  }

  render(): JSX.Element {
    return (
      <div className={this.props.classes.root}>
        <TextField
          id="input-char"
          label="城娘選擇"
          className={this.props.classes.textField}
          onClick={this.handleChar}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="input-level"
          label="城娘等級"
          className={this.props.classes.textField}
          value={1}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="input-love"
          label="絆"
          className={this.props.classes.textField}
          value={1}
          margin="normal"
          variant="outlined"
        />
        <Divider variant="middle" />
        <MucText modelLabel={'耐久'} modelValue={1} />
        <MucText modelLabel={'攻擊'} modelValue={1} />
        <MucText modelLabel={'防禦'} modelValue={1} />
      </div>
    );
  }
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

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todo';
// import { Todo } from '../model/model';
import { RootState } from '../reducers/index';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { listType, listTypeS } from '../constants/ConstList';

export namespace MenuChar {
  export interface Props extends WithStyles<typeof styles> {
  }
  export interface State {
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class MenuChar extends React.Component<MenuChar.Props, MenuChar.State> {
  state = {
    type: '',
  };

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderSelectType = (): JSX.Element => {
    return (
      <FormControl className={this.props.classes.formControl}>
        <InputLabel htmlFor="select-type">武器種</InputLabel>
          <Select
            value={this.state.type}
            onChange={this.handleChange}
            inputProps={{
              name: 'type',
              id: 'select-type',
            }}
          >
            {listType.reduce((output: any[], data: string, i: number) => {
              output.push(<MenuItem value={listTypeS[i]}>{data}</MenuItem>);
              return output;
            },               [])}
          </Select>
        </FormControl>
    );
  };

  render(): JSX.Element {
    return (
      <div className={this.props.classes.root}>
        {this.renderSelectType()}
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

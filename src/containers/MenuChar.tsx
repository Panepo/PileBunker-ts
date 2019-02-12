import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { QueryInput, CharInfo } from '../model/modelQuery';
import { CharInput } from '../model/modelCalc';
import * as ActionsQuery from '../actions/actionQuery';
import * as ActionsCalc from '../actions/actionCalc';
import { RootState } from '../reducers/index';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { listType, listTypeS } from '../constants/ConstList';

export namespace MenuChar {
  export interface Props extends WithStyles<typeof styles> {
    actionsQ: typeof ActionsQuery;
    actionsC: typeof ActionsCalc;
    charInfo: CharInfo[];
    charInput: CharInput;
  }
  export interface State {
    queryInput: QueryInput;
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
    queryInput: { type: 'bell', plain: 2, rarity: 8 },
  };

  handleChange = (name: string) => (event: any) => {
    this.props.actionsC.charInput({...this.props.charInput, charType: event.target.value });
    this.setState({ queryInput: { ...this.state.queryInput, type: event.target.value } });
  };

  renderSelectType = (): JSX.Element => {
    return (
      <FormControl className={this.props.classes.formControl}>
        <InputLabel htmlFor="select-type">武器種</InputLabel>
          <Select
            value={this.props.charInput.charType}
            onChange={this.handleChange('charType')}
            inputProps={{
              name: 'charType',
              id: 'select-charType',
            }}
          >
            {listType.reduce((output: any[], data: string, i: number) => {
              output.push(<MenuItem key={'select-charType' + i.toString()} value={listTypeS[i]}>{data}</MenuItem>);
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
    charInfo: state.reducerQuery.output,
    charInput: state.reducerCalc.charInput
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsQ: bindActionCreators(ActionsQuery as any, dispatch),
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuChar));

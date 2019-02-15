import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CharInput } from '../model/modelCalc';
import * as ActionsCalc from '../actions/actionCalc';
import { RootState } from '../reducers/index';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

export namespace MenuBuff {
  export interface Props extends WithStyles<typeof styles> {
    actionsC: typeof ActionsCalc;
    charInput: CharInput;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 120,
  },
});

class MenuBuff extends React.Component<MenuBuff.Props> {
  render(): JSX.Element {
    return <div />;
  }
}

function mapStateToProps(state: RootState) {
  return {
    charInput: state.reducerCalc.charInput
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuBuff));

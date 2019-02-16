import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EnemyInput } from '../model/modelCalc';
import * as ActionsCalc from '../actions/actionCalc';
import { RootState } from '../reducers/index';
import NumberFormat from 'react-number-format';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { MenuList, menuEnemyList, menuEnemySwitch } from '../constants/ConstMenuList';
import MucToggleButton from '../components/MucToggleButton';

export namespace MenuEnemy {
  export interface Props extends WithStyles<typeof styles> {
    actionsC: typeof ActionsCalc;
    enemyInput: EnemyInput;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 160,
  },
});

function NumberFormatCustom(props: any) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values: any) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
    />
  );
}

class MenuEnemy extends React.Component<MenuEnemy.Props> {
  handleChange = (value: string) => (event: any) => {
    this.props.actionsC.enemyInput({...this.props.enemyInput, [value]: event.target.value });
  }

  handleSwitch = (modelId: string) => {
    if (this.props.enemyInput[modelId]) {
      this.props.actionsC.enemyInput({...this.props.enemyInput, [modelId]: false });
    } else {
      this.props.actionsC.enemyInput({...this.props.enemyInput, [modelId]: true });
    }
  }

  renderMenu = () => {
    return menuEnemyList.reduce((output: any[], data: MenuList, i: number) => {
      output.push(
        <TextField
          key={data.id + i.toString()}
          id={data.id}
          label={data.label}
          className={this.props.classes.formControl}
          value={this.props.enemyInput[data.value] as number}
          onChange={this.handleChange(data.value)}
          margin="normal"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      );
      return output;
    },                          []);
  }

  renderMenuSwitch = () => {
    return menuEnemySwitch.reduce((output: any[], data: MenuList, i: number) => {
      output.push(
        <MucToggleButton
          key={data.id + i.toString()}
          modelKey={data.id + i.toString()}
          modelSwitch={this.props.enemyInput[data.value] ? data.value : '0'}
          modelId={data.value}
          modelTitle={data.label}
          modelFunction={
            modelId => {this.handleSwitch(modelId); }}
        />
      );
      return output;
    },                            []);
  }

  render(): JSX.Element {
    return (
      <div className={this.props.classes.root}>
        <div>{this.renderMenu()}</div>
        <div>{this.renderMenuSwitch()}</div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    enemyInput: state.reducerCalc.enemyInput
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuEnemy));

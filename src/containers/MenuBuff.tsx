import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BuffInput } from '../model/modelCalc';
import * as ActionsCalc from '../actions/actionCalc';
import { RootState } from '../reducers/index';
import NumberFormat from 'react-number-format';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { MenuList, menuBuffList, menuBuffSwitch } from '../constants/ConstMenuList';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export namespace MenuBuff {
  export interface Props extends WithStyles<typeof styles> {
    actionsC: typeof ActionsCalc;
    buffInput: BuffInput;
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

class MenuBuff extends React.Component<MenuBuff.Props> {
  handleChange = (value: string) => (event: any) => {
    this.props.actionsC.buffInput({...this.props.buffInput, [value]: event.target.value });
  }

  handleSwitch = (name: string) => (event: any) => {
    this.props.actionsC.buffInput({...this.props.buffInput, [name]: event.target.checked });
  }

  renderMenu = () => {
    return menuBuffList.reduce((output: any[], data: MenuList, i: number) => {
      output.push(
        <TextField
          key={data.id + i.toString()}
          id={data.id}
          label={data.label}
          className={this.props.classes.formControl}
          value={this.props.buffInput[data.value] as number}
          onChange={this.handleChange(data.value)}
          margin="normal"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      );
      return output;
    },                         []);
  }

  renderMenuSwitch = () => {
    return menuBuffSwitch.reduce((output: any[], data: MenuList, i: number) => {
      output.push(
        <FormControlLabel
          key={data.id + i.toString()}
          control={
            <Checkbox
              checked={this.props.buffInput[data.value] ? true : false}
              onChange={this.handleSwitch(data.value)}
              value={data.value}
              color="primary"
            />
          }
          label={data.label}
        />
      );
      return output;
    },                           []);
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
    buffInput: state.reducerCalc.buffInput
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuBuff));

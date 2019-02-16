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
import MucToggleButton from '../components/MucToggleButton';

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

  handleSwitch = (modelId: string) => {
    if (this.props.buffInput[modelId]) {
      this.props.actionsC.buffInput({...this.props.buffInput, [modelId]: false });
    } else {
      this.props.actionsC.buffInput({...this.props.buffInput, [modelId]: true });
    }
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
        <MucToggleButton
          key={data.id + i.toString()}
          modelKey={data.id + i.toString()}
          modelSwitch={this.props.buffInput[data.value] ? data.value : '0'}
          modelId={data.value}
          modelTitle={data.label}
          modelFunction={
            modelId => {this.handleSwitch(modelId); }}
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
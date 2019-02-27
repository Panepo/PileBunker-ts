import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CharInput } from '../../model/modelCalc';
import { QueryInput } from '../../model/modelQuery';
import * as ActionsQuery from '../../actions/actionQuery';
import * as ActionsCalc from '../../actions/actionCalc';
import { RootState } from '../../reducers/index';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import DialogCharQuery from './DialogCharQuery';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { listType, ListType, listMax, ListMax } from '../../constants/ConstCalc';
import NumberFormat from 'react-number-format';
import * as calcChar from '../../reducers/calcChar';

export namespace MenuChar {
  export interface Props extends WithStyles<typeof styles> {
    actionsQ: typeof ActionsQuery;
    actionsC: typeof ActionsCalc;
    charInput: CharInput;
    charQuery: QueryInput;
  }
  export interface State {
    statusDialog: boolean;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 160,
  },
  typeImage: {
    width: 15,
    height: 15,
    marginRight: theme.spacing.unit,
  }
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
      allowNegative={false}
    />
  );
}

class MenuChar extends React.Component<MenuChar.Props, MenuChar.State> {
  state = {
    statusDialog: false,
  };

  handleChange = (name: string) => (event: any) => {
    if (event.target.value != null) {
      switch (name) {
        case 'charType': {
          this.props.actionsQ.charQuery({...this.props.charQuery, type: event.target.value });
          this.props.actionsC.charInput({...this.props.charInput, charType: event.target.value });
          break;
        }
        case 'charLevel': {
          this.props.actionsC.charInput({...this.props.charInput, charLevel: event.target.value });
          break;
        }
        case 'charMax': {
          this.props.actionsC.charInput({...this.props.charInput, charMax: event.target.value });
          break;
        }
        case 'charCompanion': {
          this.props.actionsC.charInput({...this.props.charInput, charCompanion: event.target.value });
          break;
        }
        case 'charStructure': {
          this.props.actionsC.charInput({...this.props.charInput, charStructure: event.target.value });
          break;
        }
        default: {}
      }
    }
  };

  handleCharOpen = () => {
    this.setState({ statusDialog: true});
  }

  handleCharClose = () => {
    this.setState({ statusDialog: false});
  }

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
            {listType.reduce((output: any[], data: ListType, i: number) => {
              output.push(
                <MenuItem key={'select-charType' + i.toString()} value={data.name}>
                  <img className={this.props.classes.typeImage} src={data.image} alt={data.name} />
                  {data.cname}
                </MenuItem>
                );
              return output;
            },               [])}
          </Select>
        </FormControl>
    );
  };

  renderSelectLevel = (): JSX.Element => {
    return (
      <TextField
        id="select-charLevel"
        label="城娘等級"
        className={this.props.classes.formControl}
        value={this.props.charInput.charLevel}
        onChange={this.handleChange('charLevel')}
        margin="normal"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    );
  };

  renderSelectAtkParm = (): JSX.Element => {
    return (
      <TextField
        id="select-charAtkParm"
        label="攻擊成長係數(%)"
        className={this.props.classes.formControl}
        value={this.props.charInput.charAtkParm}
        onClick={this.handleCharOpen}
        margin="normal"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    );
  };

  renderSelectDialog = (): JSX.Element => {
    return (
      <DialogCharQuery
        statusDialog={this.state.statusDialog}
        statusFunction={this.handleCharClose}
        />
    );
  }

  renderSelecMax = (): JSX.Element => {
    return (
      <FormControl className={this.props.classes.formControl}>
        <InputLabel htmlFor="select-type">巨大化</InputLabel>
        <Select
          value={this.props.charInput.charMax}
          onChange={this.handleChange('charMax')}
          inputProps={{
            name: 'charMax',
            id: 'select-charMax',
          }}
        >
          {listMax.reduce((output: any[], data: ListMax, i: number) => {
            output.push(
              <MenuItem key={'select-charType' + i.toString()} value={data.value}>
                {data.cname}
              </MenuItem>
              );
            return output;
          },              [])}
        </Select>
      </FormControl>
    );
  };

  renderSelectCompanion = (): JSX.Element => {
    return (
      <TextField
        id="select-charCompanion"
        label="伴"
        className={this.props.classes.formControl}
        value={this.props.charInput.charCompanion}
        onChange={this.handleChange('charCompanion')}
        margin="normal"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    );
  };

  renderSelectStructure = (): JSX.Element => {
    return (
      <TextField
        id="select-charStructure"
        label="設施攻擊"
        className={this.props.classes.formControl}
        value={this.props.charInput.charStructure}
        onChange={this.handleChange('charStructure')}
        margin="normal"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    );
  };

  renderCharInfo = (): JSX.Element => {
    return (
      <div>
        <TextField
            id="standard-name"
            label="耐久"
            className={this.props.classes.formControl}
            value={calcChar.calcHP(this.props.charInput)}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
        <TextField
            id="standard-name"
            label="攻擊"
            className={this.props.classes.formControl}
            value={calcChar.calcAtk(this.props.charInput)}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
        <TextField
            id="standard-name"
            label="防禦"
            className={this.props.classes.formControl}
            value={calcChar.calcDef(this.props.charInput)}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
      </div>
    );
  }

  render(): JSX.Element {
    return (
      <div className={this.props.classes.root}>
        <div>
          {this.renderSelectType()}
          {this.renderSelectLevel()}
          {this.renderSelectAtkParm()}
          {this.renderSelectDialog()}
          {this.renderSelecMax()}
          {this.renderSelectCompanion()}
          {this.renderSelectStructure()}
        </div>
        {this.renderCharInfo()}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    charQuery: state.reducerQuery.input,
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

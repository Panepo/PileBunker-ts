import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CharInput } from '../model/modelCalc';
import { QueryInput, CharInfo } from '../model/modelQuery';
import * as ActionsQuery from '../actions/actionQuery';
import * as ActionsCalc from '../actions/actionCalc';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

import MucToggleButton from './MucToggleButton';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { listType, listTypeS, listPlain, listPlainS } from '../constants/ConstList';
import { imageData } from '../images/index';

export namespace MenuQuery {
  export interface Props extends WithStyles<typeof styles> {
    actionsQ: typeof ActionsQuery;
    actionsC: typeof ActionsCalc;
    charInfo: CharInfo[];
    charInput: CharInput;
    charQuery: QueryInput;
    statusDialog: boolean;
    statusFunction: () => void;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 120,
  },
  typeImage: {
    width: 15,
    height: 15,
    marginRight: theme.spacing.unit,
  }
});

class MenuQuery extends React.Component<MenuQuery.Props> {
  handleType = (event: any) => {
    this.props.actionsQ.charQuery({...this.props.charQuery, type: event.target.value });
    this.props.actionsC.charInput({...this.props.charInput, charType: event.target.value });
  }

  handleTerrain = (terrain: string) => () => {
    let terrainTemp = this.props.charQuery.plain;
    // tslint:disable-next-line:no-bitwise
    if (terrainTemp & +terrain) {
      // tslint:disable-next-line:no-bitwise
      terrainTemp ^= +terrain;
    } else {
      // tslint:disable-next-line:no-bitwise
      terrainTemp |= +terrain;
    }

    this.props.actionsQ.charQuery({...this.props.charQuery, plain: terrainTemp});
  }

  renderSelectType = (): JSX.Element => {
    return (
      <FormControl className={this.props.classes.formControl}>
        <InputLabel htmlFor="select-type">武器種</InputLabel>
          <Select
            value={this.props.charInput.charType}
            onChange={this.handleType}
            inputProps={{
              name: 'charType',
              id: 'select-charType',
            }}
          >
            {listType.reduce((output: any[], data: string, i: number) => {
              output.push(
                <MenuItem key={'select-charType' + i.toString()} value={listTypeS[i]}>
                  <img className={this.props.classes.typeImage} src={imageData[listTypeS[i]]} alt={listTypeS[i]} />
                  {data}
                </MenuItem>
                );
              return output;
            },               [])}
          </Select>
        </FormControl>
    );
  };

  renderSelectTerrain = () => {
    const plainTemp = (
      <label key={'indexButton_plain'} htmlFor="indexPlain">
        屬性：
      </label>
    );

    return listPlain.reduce((output: any[], data: string, i: number) => {
      output.push(
        <MucToggleButton
          modelKey={'indexPlain' + i.toString()}
          modelId={listPlainS[i].toString()}
          // tslint:disable-next-line:no-bitwise
          modelSwitch={(this.props.charQuery.plain & listPlainS[i]).toString()}
          modelTitle={data}
          modelFunction={modelId => { this.handleTerrain(modelId); }}
        />
        );
      return output;
      },
                            [plainTemp]
    );
  }

  render(): JSX.Element {
    return (
      <Dialog
        open={this.props.statusDialog}
        onClose={this.props.statusFunction}
        aria-labelledby="select-dialog-title"
        aria-describedby="select-dialog-description"
      >
        <DialogTitle id="select-dialog-title">{'Use Google\'s location service?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="select-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
          {this.renderSelectType()}
          {this.renderSelectTerrain()}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.statusFunction} color="primary">
            Disagree
          </Button>
          <Button onClick={this.props.statusFunction} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsQ: bindActionCreators(ActionsQuery as any, dispatch),
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapDispatchToProps)(MenuQuery));

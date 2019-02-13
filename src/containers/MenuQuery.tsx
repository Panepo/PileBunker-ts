import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CharInput } from '../model/modelCalc';
import { QueryInput, CharInfo } from '../model/modelQuery';
import * as ActionsQuery from '../actions/actionQuery';
import * as ActionsCalc from '../actions/actionCalc';
import { RootState } from '../reducers/index';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

import MucToggleButton from '../components/MucToggleButton';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { listType, listTypeS, listPlain, listPlainS } from '../constants/ConstList';
// import { imageData } from '../images/index';

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
  handleType = (modelId: string) => (event: any) => {
    console.log('FQ');
    console.log(modelId);
  }

  handleTerrain = (modelId: string) => (event: any) => {
    console.log('FQQ');
    console.log(modelId);
  }

  renderSelectType = () => {
    const typeTemp = (
      <label key={'select_type_label'} htmlFor="select_type">
        武器種：
      </label>
    );

    return (
      <div>
        {listType.reduce((output: any[], data: string, i: number) => {
          output.push(
            <MucToggleButton
              key={'select_type_' + i.toString()}
              modelKey={'select_type_' + i.toString()}
              modelSwitch={this.props.charQuery.type}
              modelId={listTypeS[i]}
              modelTitle={data}
              modelFunction={
                modelId => {this.props.actionsQ.charQueryInput({selector: 'type', value: modelId}); }}
            />
          );
          return output;
        },
                         [typeTemp]
        )}
      </div>);
  };

  renderSelectTerrain = () => {
    const plainTemp = (
      <label key={'select_plain_label'} htmlFor="select_plain">
        屬性：
      </label>
    );

    return (
      <div>
        {listPlain.reduce((output: any[], data: string, i: number) => {
          output.push(
            <MucToggleButton
              key={'select_type_' + i.toString()}
              modelKey={'select_type_' + i.toString()}
              // tslint:disable-next-line:no-bitwise
              modelSwitch={(this.props.charQuery.plain & listPlainS[i]).toString()}
              modelId={listPlainS[i].toString()}
              modelTitle={data}
              modelFunction={modelId => {this.handleTerrain(modelId); }}
            />
          );
          return output;
        },
                          [plainTemp]
        )}
      </div>
      );
  }

  render(): JSX.Element {
    return (
      <Dialog
        open={this.props.statusDialog}
        onClose={this.props.statusFunction}
        aria-labelledby="select-dialog-title"
        aria-describedby="select-dialog-description"
        maxWidth={'xl'}
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

function mapStateToProps(state: RootState) {
  return {
    charQuery: state.reducerQuery.input,
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuQuery));

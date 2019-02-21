import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CharInput } from '../../model/modelCalc';
import { QueryInput, CharInfo } from '../../model/modelQuery';
import * as ActionsQuery from '../../actions/actionQuery';
import * as ActionsCalc from '../../actions/actionCalc';
import { RootState } from '../../reducers/index';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import TableChar from './TableChar';
import MucToggleButton from '../../components/MucToggleButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { listType, ListType, listRarity, ListRarity, listTerrain, ListTerrain } from '../../constants/ConstCalc';

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
  // ================================================================================
  // Render select character type
  // ================================================================================
  handleType = (modelId: string) => {
    this.props.actionsQ.charQuery({...this.props.charQuery, type: modelId });
    this.props.actionsC.charInput({...this.props.charInput, charType: modelId });
  }

  renderSelectType = () => {
    const typeTemp = (
      <label key={'select_type_label'} htmlFor="select_type">
        武器種：
      </label>
    );

    return (
      <div>
        {listType.reduce((output: any[], data: ListType, i: number) => {
          output.push(
            <MucToggleButton
              key={'select_type_' + i.toString()}
              modelKey={'select_type_' + i.toString()}
              modelSwitch={this.props.charQuery.type}
              modelId={data.name}
              modelTitle={data.cname}
              modelFunction={
                modelId => {this.handleType(modelId); }}
            />
          );
          return output;
        },
                         [typeTemp]
        )}
      </div>);
  };

  // ================================================================================
  // Render select character terrain
  // ================================================================================
  handleTerrain = (modelId: string) => {
    let plainTemp = this.props.charQuery.plain;
    // tslint:disable-next-line:no-bitwise
    if (plainTemp & +modelId) {
      // tslint:disable-next-line:no-bitwise
      plainTemp ^= +modelId;
    } else {
      // tslint:disable-next-line:no-bitwise
      plainTemp |= +modelId;
    }
    this.props.actionsQ.charQuery({...this.props.charQuery, plain: plainTemp });
  }

  renderSelectTerrain = () => {
    const plainTemp = (
      <label key={'select_plain_label'} htmlFor="select_plain">
        屬性：
      </label>
    );

    return (
      <div>
        {listTerrain.reduce((output: any[], data: ListTerrain, i: number) => {
          output.push(
            <MucToggleButton
              key={'select_type_' + i.toString()}
              modelKey={'select_type_' + i.toString()}
              // tslint:disable-next-line:no-bitwise
              modelSwitch={(this.props.charQuery.plain & data.value).toString()}
              modelId={data.value.toString()}
              modelTitle={data.cname}
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

  // ================================================================================
  // Render select character rarity
  // ================================================================================
  handleRarity = (modelId: string) => {
    let rarityTemp = this.props.charQuery.rarity;
    // tslint:disable-next-line:no-bitwise
    if (rarityTemp & +modelId) {
      // tslint:disable-next-line:no-bitwise
      rarityTemp ^= +modelId;
    } else {
      // tslint:disable-next-line:no-bitwise
      rarityTemp |= +modelId;
    }
    this.props.actionsQ.charQuery({...this.props.charQuery, rarity: rarityTemp });
  }

  renderSelectRarity = () => {
    const rarityTemp = (
      <label key={'indexButton_rarity'} htmlFor="indexPlain">
        稀有度：
      </label>
    );

    return (
      <div>
        {listRarity.reduce((output: any[], data: ListRarity, i: number) => {
          output.push(
            <MucToggleButton
              key={'select_rarity_' + i.toString()}
              modelKey={'select_rarity_' + i.toString()}
              // tslint:disable-next-line:no-bitwise
              modelSwitch={(this.props.charQuery.rarity & data.binary).toString()}
              modelId={data.binary.toString()}
              modelTitle={data.cname}
              modelFunction={modelId => {this.handleRarity(modelId); }}
            />
          );
          return output;
        },
                           [rarityTemp]
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
        <DialogTitle id="select-dialog-title">城娘選擇</DialogTitle>
        <DialogContent>
          <DialogContentText id="select-dialog-description">
            {this.renderSelectType()}
            {this.renderSelectTerrain()}
            {this.renderSelectRarity()}
          </DialogContentText>
        </DialogContent>
        <TableChar closeFunction={this.props.statusFunction} />
        <DialogActions>
          <Button onClick={this.props.statusFunction} color="primary" autoFocus>
            Close
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

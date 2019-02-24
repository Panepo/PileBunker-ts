import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCalc from '../../actions/actionCalc';
import { RootState } from '../../reducers/index';
import { WeaponInfo } from '../../model/modelCalc';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { listWepQuery, ListWepQuery } from '../../constants/ConstWepQuery';

export namespace DialogWepQuery {
  export interface Props extends WithStyles<typeof styles> {
    actionsC: typeof ActionsCalc;
    wepInfo: WeaponInfo;
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

class DialogWepQuery extends React.Component<DialogWepQuery.Props> {
  renderContent = () => {
    return listWepQuery.reduce((output: any[], data: ListWepQuery, i: number) => {
      output.push(

      );
      return output;
    },
                               []
    );
  }

  render(): JSX.Element {
    return (
      <Dialog
        open={this.props.statusDialog}
        onClose={this.props.statusFunction}
        aria-labelledby="select-dialog-title"
        aria-describedby="select-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="select-dialog-title">武器資訊</DialogTitle>
        <DialogContent>
          <DialogContentText id="select-dialog-description">
            {this.renderContent}
          </DialogContentText>
        </DialogContent>
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
    wepInfo: state.reducerCalc.wepQuery
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DialogWepQuery));

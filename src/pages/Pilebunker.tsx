import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';
import { CharInput } from '../model/modelCalc';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import MenuChar from '../containers/MenuChar';
import MenuBuff from '../containers/MenuBuff';
import MenuEnemy from '../containers/MenuEnemy';
// import TableWeapon from '../containers/TableWeapon';

import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export namespace Pilebunker {
  export interface Props extends WithStyles<typeof styles> {
    charInput: CharInput;
  }
  export interface State {
    expanded: string | boolean;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
  grid: {
    flexGrow: 1,
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Pilebunker extends React.Component<Pilebunker.Props, Pilebunker.State> {
  state = {
    expanded: ''
  };

  handleChange = (panel: string) => (event: React.ChangeEvent<{}>, expanded: boolean) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render(): JSX.Element {
    return (
      <main className={this.props.classes.root}>
        <Grid container className={this.props.classes.grid} justify="center" spacing={16}>
          <Grid item xs={8}>
            <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={this.props.classes.heading}>城娘設定</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MenuChar />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={this.props.classes.heading}>バフ設定</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MenuBuff />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={this.props.classes.heading}>敵設定</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MenuEnemy />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </main>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    charInput: state.reducerCalc.charInput
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Pilebunker));

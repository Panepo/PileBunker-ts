import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../reducers/index';
import { CharInput } from '../model/modelCalc';
import { createStyles, Theme, WithStyles, withStyles, withWidth } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import MenuChar from '../containers/MenuChar';
import MenuBuff from '../containers/MenuBuff';
import MenuEnemy from '../containers/MenuEnemy';
import MenuRefine from '../containers/MenuRefine';
import TableWeapon from '../containers/TableWeapon';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import BuildIcon from '@material-ui/icons/Build';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import BugReportIcon from '@material-ui/icons/BugReport';
import { isSmartphone } from '../helpers/responsive.helper';

export namespace Pilebunker {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles>, WithWidth {
    charInput: CharInput;
  }
  export interface State {
    expanded: string | boolean;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: '-55vh',
    marginBottom: '60px',
    flex: 1
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
  icon: {
    marginRight: theme.spacing.unit,
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
        <Grid container className={this.props.classes.grid} justify="center">
          <Grid item xs={isSmartphone(this.props.width) ? 12 : 8}>
            <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <RecentActorsIcon color="primary" className={this.props.classes.icon} />
                <Typography className={this.props.classes.heading}>城娘設定</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MenuChar />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <PlaylistAddIcon color="primary" className={this.props.classes.icon} />
                <Typography className={this.props.classes.heading}>バフ設定</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MenuBuff />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <BugReportIcon color="primary" className={this.props.classes.icon} />
                <Typography className={this.props.classes.heading}>敵設定</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MenuEnemy />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'panel4'} onChange={this.handleChange('panel4')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <BuildIcon color="primary" className={this.props.classes.icon} />
                <Typography className={this.props.classes.heading}>精煉設定</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MenuRefine />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <TableWeapon />
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

export default withStyles(styles)(connect(mapStateToProps)(withWidth()(Pilebunker)));

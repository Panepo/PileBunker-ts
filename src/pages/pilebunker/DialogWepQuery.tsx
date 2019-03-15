import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionsCalc from '../../actions/actionCalc'
import { RootState } from '../../reducers/index'
import { WeaponInfo } from '../../model/modelCalc'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconColorize from '@material-ui/icons/Colorize'
import IconSchedule from '@material-ui/icons/Schedule'
import IconRestore from '@material-ui/icons/Restore'
import IconRedo from '@material-ui/icons/Redo'
import Divider from '@material-ui/core/Divider'
import { listType } from '../../constants/ConstCalc'

export namespace DialogWepQuery {
  export interface Props extends WithStyles<typeof styles> {
    actionsC: typeof ActionsCalc
    wepInfo: WeaponInfo
    statusDialog: boolean
    statusFunction: () => void
  }
  export interface State {
    data: WeaponInfo
  }
}

const styles = (theme: Theme) =>
  createStyles({
    typeImage: {
      width: 18,
      height: 18,
      marginRight: theme.spacing.unit
    }
  })

class DialogWepQuery extends React.Component<DialogWepQuery.Props> {
  state = {
    data: this.props.wepInfo
  }

  componentDidMount() {
    this.setState({ data: this.props.wepInfo })
  }

  static getDerivedStateFromProps(nextProps: Readonly<DialogWepQuery.Props>) {
    return { data: nextProps.wepInfo }
  }

  renderTypeIcon = (): JSX.Element | null => {
    for (let i = 0; i < listType.length; i += 1) {
      if (listType[i].name === this.state.data.type) {
        return (
          <img
            className={this.props.classes.typeImage}
            key={listType[i].name}
            src={listType[i].image}
            alt={listType[i].name}
          />
        )
      }
    }
    return null
  }

  renderContent = (): JSX.Element => {
    return (
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <IconColorize color="primary" />
          </ListItemIcon>
          <ListItemText primary={'攻擊: ' + this.state.data.atk} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconSchedule color="primary" />
          </ListItemIcon>
          <ListItemText primary={'攻撃間隔: ' + this.state.data.frame1} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconRestore color="primary" />
          </ListItemIcon>
          <ListItemText primary={'攻撃後の隙: ' + this.state.data.frame2} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconRedo color="primary" />
          </ListItemIcon>
          <ListItemText primary={'範圍: ' + this.state.data.range} />
        </ListItem>
        {this.renderDivider()}
        {this.renderText()}
      </List>
    )
  }

  renderDivider = (): JSX.Element | null => {
    if (this.state.data.text.length > 0) {
      return <Divider />
    } else {
      return null
    }
  }

  renderText = (): JSX.Element | null => {
    if (this.state.data.text.length > 0) {
      return (
        <ListItem button>
          <ListItemText primary={this.state.data.text} />
        </ListItem>
      )
    } else {
      return null
    }
  }

  renderRarity = () => {
    switch (this.state.data.rare) {
      case 8:
        return '★★★★★★★★'
      case 7:
        return '★★★★★★★'
      case 6:
        return '★★★★★★'
      case 5:
        return '★★★★★'
      case 4:
        return '★★★★'
      case 3:
        return '★★★'
      case 2:
        return '★★'
      case 1:
        return '★'
      default:
        return '★'
    }
  }

  render(): JSX.Element {
    return (
      <Dialog
        open={this.props.statusDialog}
        onClose={this.props.statusFunction}
        aria-labelledby="select-dialog-title"
        aria-describedby="select-dialog-description"
        maxWidth={'lg'}
      >
        <DialogTitle id="select-dialog-title">
          <List component="nav">
            <ListItem>
              <ListItemText>
                {this.renderTypeIcon()}
                {this.state.data.refText + ' ' + this.state.data.name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>{this.renderRarity()}</ListItemText>
            </ListItem>
          </List>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="select-dialog-description">
            {this.renderContent()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.statusFunction} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

function mapStateToProps(state: RootState) {
  return {
    wepInfo: state.reducerCalc.wepQuery
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DialogWepQuery)
)

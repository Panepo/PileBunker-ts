import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionsCalc from '../../actions/actionCalc'
import { RootState } from '../../reducers/index'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { MenuList, menuRefineList } from '../../constants/ConstMenuList'

export namespace MenuRefine {
  export interface Props extends WithStyles<typeof styles> {
    actionsC: typeof ActionsCalc
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    button: {
      marginRight: theme.spacing.unit
    }
  })

class MenuRefine extends React.Component<MenuRefine.Props> {
  handleRefineMacro = (command: string) => (event: any) => {
    this.props.actionsC.refineChangeMarco(command)
  }

  render() {
    return menuRefineList.reduce((output: any[], data: MenuList, i: number) => {
      output.push(
        <Button
          className={this.props.classes.button}
          color="primary"
          key={data.id + i.toString()}
          onClick={this.handleRefineMacro(data.value)}
        >
          {data.label}
        </Button>
      )
      return output
    }, [])
  }
}

function mapStateToProps(state: RootState) {
  return {}
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
  )(MenuRefine)
)

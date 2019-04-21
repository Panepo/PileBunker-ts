import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

export namespace MucToggleButton {
  export interface Props extends WithStyles<typeof styles> {
    modelKey: string
    modelSwitch: string
    modelId: string
    modelImg: string
    modelTitle: string
    modelFunction: (id: string) => void
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    inactive: {
      opacity: 0.5
    }
  })

class MucToggleImgButton extends React.Component<MucToggleButton.Props> {
  propTypes = {
    classes: PropTypes.object.isRequired,
    modelKey: PropTypes.string,
    modelSwitch: PropTypes.string.isRequired,
    modelId: PropTypes.string.isRequired,
    modelImg: PropTypes.string.isRequired,
    modelTitle: PropTypes.string,
    modelFunction: PropTypes.func.isRequired
  }

  defaultProps = {
    modelKey: 'MucToggleImgButton',
    modelTitle: 'MucToggleImgButton'
  }

  handleModelFunction = () => {
    this.props.modelFunction(this.props.modelId)
  }

  render(): JSX.Element {
    if (this.props.modelSwitch === this.props.modelId) {
      return (
        <Button key={this.props.modelKey} onClick={this.handleModelFunction}>
          <img src={this.props.modelImg} alt={this.props.modelTitle} />
        </Button>
      )
    } else {
      return (
        <Button key={this.props.modelKey} onClick={this.handleModelFunction}>
          <img
            src={this.props.modelImg}
            className={this.props.classes.inactive}
            alt={this.props.modelTitle}
          />
        </Button>
      )
    }
  }
}

export default withStyles(styles)(MucToggleImgButton)

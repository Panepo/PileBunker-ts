import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export namespace MucToggleButton {
  export interface Props extends WithStyles<typeof styles> {
    modelKey: string;
    modelSwitch: string;
    modelTitle: string;
    modelId: string;
    modelFunction: (id: string) => void;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
  },
});

class MucToggleButton extends React.Component<MucToggleButton.Props> {
  handleModelFunction = () => {
    this.props.modelFunction(this.props.modelId);
  }

  render(): JSX.Element {
    if (this.props.modelSwitch === this.props.modelId) {
      return (
        <Button key={this.props.modelKey} onClick={this.handleModelFunction} color="primary">
          {this.props.modelTitle}
        </Button>
      );
    } else {
      return (
        <Button key={this.props.modelKey} onClick={this.handleModelFunction} color="secondary">
          {this.props.modelTitle}
        </Button>
      );
    }
  }
}

export default withStyles(styles)(MucToggleButton);

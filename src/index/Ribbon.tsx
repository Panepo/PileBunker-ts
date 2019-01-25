import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
    height: '60vh',
    background: 'linear-gradient(165deg, #9966ff 20%, #ff99ff 70%)'
  }
});

class Ribbon extends React.Component<WithStyles<typeof styles>> {
  render(): JSX.Element {
    return <div className={this.props.classes.root} />;
  }
}

export default withStyles(styles)(Ribbon);

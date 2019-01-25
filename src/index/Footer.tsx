import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  root: {
    background: '#424242',
    height: '60px',
    width: '100%'
  },
  text: {
    color: '#BDBDBD',
    fontSize: '13px',
    paddingLeft: '40px',
    paddingTop: '20px'
  }
});

class Footer extends React.Component<WithStyles<typeof styles>> {
  render(): JSX.Element {
    return (
      <footer className={this.props.classes.root}>
        <Typography className={this.props.classes.text}>
          Copyright &copy; Panepo@Github 2018 All Rights Reserved.
        </Typography>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);

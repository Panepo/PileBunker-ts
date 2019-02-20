import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  root: {
    background: '#424242',
    width: '100%'
  },
  text: {
    color: '#BDBDBD',
    fontSize: '12px',
    paddingLeft: '40px',
    paddingTop: '30px',
    paddingBottom: '30px'
  }
});

class Footer extends React.Component<WithStyles<typeof styles>> {
  render(): JSX.Element {
    return (
      <footer className={this.props.classes.root}>
        <Typography className={this.props.classes.text}>
          <div>『<a href="http://www.dmm.com/netgame_s/oshirore/">城プロRE</a>』(C) DMMゲームズ</div>
          <div>「城プロRE」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。</div>
          <div>Copyright &copy; Panepo@Github 2018 All Rights Reserved.</div>
        </Typography>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);

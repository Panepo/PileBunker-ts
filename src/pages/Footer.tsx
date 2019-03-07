import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const styles = createStyles({
  root: {
    background: '#424242',
    width: '100%'
  },
  textDiv: {
    paddingLeft: '40px',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  text: {
    color: '#BDBDBD',
    fontSize: '12px'
  }
})

export interface Props extends WithStyles<typeof styles> {}

const Footer = (props: Props) => {
  const { classes } = props
  return (
    <footer className={classes.root}>
      <div className={classes.textDiv}>
        <Typography className={classes.text}>
          『<a href="http://www.dmm.com/netgame_s/oshirore/">城プロRE</a>』(C)
          DMMゲームズ
        </Typography>
        <Typography className={classes.text}>
          「城プロRE」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。
        </Typography>
        <Typography className={classes.text}>
          Copyright &copy; Panepo@Github 2018 All Rights Reserved.
        </Typography>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
} as any

export default withStyles(styles)(Footer)

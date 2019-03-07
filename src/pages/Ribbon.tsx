import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'

const styles = createStyles({
  root: {
    width: '100%',
    height: '60vh',
    background: 'linear-gradient(165deg, #9966ff 20%, #ff99ff 70%)'
  }
})

export interface Props extends WithStyles<typeof styles> {}

const Ribbon = (props: Props) => {
  const { classes } = props
  return <div className={classes.root} />
}

Ribbon.propTypes = {
  classes: PropTypes.object.isRequired
} as any

export default withStyles(styles)(Ribbon)

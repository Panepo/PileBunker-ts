import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = createStyles({
  paper: {
    borderRadius: '2px',
    marginTop: '20px',
    marginBottom: '20px',
    paddingTop: '80px',
    paddingBottom: '80px',
    paddingLeft: '56px',
    paddingRight: '56px'
  }
})

export interface Props extends WithStyles<typeof styles> {}

const Loading = (props: Props) => {
  const { classes } = props
  return (
    <Paper className={classes.paper}>
      <Typography>Loading...</Typography>
    </Paper>
  )
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired
} as any

export default withStyles(styles)(Loading)

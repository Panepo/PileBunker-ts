import * as React from 'react'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import { TableHeadInterface } from '../constants/ConstTable'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip'

export namespace MucTableHead {
  export interface Props extends WithStyles<typeof styles> {
    numSelected: number
    order: 'asc' | 'desc'
    orderBy: string
    rowCount: number
    onRequestSort: (event: any, property: any) => void
    onSelectAllClick: (event: any) => void
    rows: TableHeadInterface[]
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {}
  })

class MucTableHead extends React.Component<MucTableHead.Props> {
  createSortHandler = (property: any) => (event: any) => {
    this.props.onRequestSort(event, property)
  }

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {this.props.rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    )
  }
}

export default withStyles(styles)(MucTableHead)

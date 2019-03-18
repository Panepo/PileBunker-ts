import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { WeaponInfo } from '../../models/modelResource'
import * as ActionsQuery from '../../actions/actionQuery'
import * as ActionsCalc from '../../actions/actionCalc'
import { RootState } from '../../reducers/index'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import MucTableHead from '../../components/MucTableHead'
import DialogWepQuery from './DialogWepQuery'
import { stableSort, getSorting } from '../../helpers/table.helper'
import { tableHeadWeapon } from '../../constants/ConstTable'

export namespace TableWeapon {
  export interface Props extends WithStyles<typeof styles> {
    actionsQ: typeof ActionsQuery
    actionsC: typeof ActionsCalc
    weaponInfo: WeaponInfo[]
  }
  export interface State {
    data: WeaponInfo[]
    order: 'asc' | 'desc'
    orderBy: string
    page: number
    rowsPerPage: number
    selected: number[]
    statusDialog: boolean
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3
    },
    table: {
      minWidth: 1020
    },
    tableWrapper: {
      overflowX: 'auto'
    }
  })

class TableWeapon extends React.Component<
  TableWeapon.Props,
  TableWeapon.State
> {
  state = {
    order: 'desc' as 'asc' | 'desc',
    orderBy: 'dps',
    selected: [] as number[],
    data: this.props.weaponInfo,
    page: 0,
    rowsPerPage: 10,
    statusDialog: false
  }

  static getDerivedStateFromProps(nextProps: Readonly<TableWeapon.Props>) {
    return { data: nextProps.weaponInfo }
  }

  handleRequestSort = (event: any, property: string) => {
    const orderBy = property
    let order: 'asc' | 'desc' = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({ order: order, orderBy: orderBy })
  }

  handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }))
      return
    }
    this.setState({ selected: [] })
  }

  handleClick = (event: any, id: number) => {
    const { selected } = this.state
    const selectedIndex: number = selected.indexOf(id)
    let newSelected: number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    this.setState({ selected: newSelected })
  }

  handleChangePage = (event: any, page: number) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value })
  }

  handleRefine = (name: string) => (event: any) => {
    this.props.actionsC.refineChange(name)
  }

  handleQueryOpen = (wepId: number) => (event: any) => {
    this.setState({ statusDialog: true })
    this.props.actionsQ.weaponQuery(wepId)
  }

  handleQueryClose = () => {
    this.setState({ statusDialog: false })
  }

  isSelected = (id: number) => this.state.selected.indexOf(id) !== -1

  render() {
    const { classes } = this.props
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <DialogWepQuery
            statusDialog={this.state.statusDialog}
            statusFunction={this.handleQueryClose}
          />
          <Table className={classes.table} aria-labelledby="tableTitle">
            <MucTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              rows={tableHeadWeapon}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n: WeaponInfo) => {
                  const isSelected = this.isSelected(n.id)
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onClick={event => this.handleClick(event, n.id)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        onClick={this.handleQueryOpen(n.id)}
                      >
                        {n.name}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.rare}
                      </TableCell>
                      <TableCell
                        align="left"
                        padding="dense"
                        onClick={this.handleRefine(n.name)}
                      >
                        {n.refText}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.damage}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.dps}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.time}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.text}
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    )
  }
}

function mapStateToProps(state: RootState) {
  return {
    weaponInfo: state.reducerCalc.output
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsQ: bindActionCreators(ActionsQuery as any, dispatch),
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableWeapon)
)

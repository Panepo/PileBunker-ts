import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CharInput } from '../../model/modelCalc'
import { CharInfo } from '../../model/modelQuery'
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
import { stableSort, getSorting } from '../../helpers/table.helper'
import { tableCharHead } from '../../constants/ConstTable'
import { listType } from '../../constants/ConstCalc'

export namespace TableChar {
  export interface Props extends WithStyles<typeof styles> {
    actionsC: typeof ActionsCalc
    charInput: CharInput
    charInfo: CharInfo[]
    closeFunction: () => void
  }
  export interface State {
    data: CharInfo[]
    order: 'asc' | 'desc'
    orderBy: string
    page: number
    rowsPerPage: number
    selected: number[]
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
    },
    typeImage: {
      width: 15,
      height: 15,
      marginRight: theme.spacing.unit
    }
  })

class TableChar extends React.Component<TableChar.Props, TableChar.State> {
  state = {
    order: 'desc' as 'asc' | 'desc',
    orderBy: 'rarity',
    selected: [] as number[],
    data: this.props.charInfo,
    page: 0,
    rowsPerPage: 5
  }

  static getDerivedStateFromProps(nextProps: Readonly<TableChar.Props>) {
    return { data: nextProps.charInfo }
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

  handleSelect = (event: any, atF: string, dfF: string, hpF: string) => {
    this.props.closeFunction()
    this.props.actionsC.charInput({
      ...this.props.charInput,
      charAtkParm: Math.round(+atF * 100),
      charDefParm: Math.round(+dfF * 100),
      charHPParm: Math.round(+hpF * 100)
    })
  }

  renderTypeIcon = (weapon: string): JSX.Element => {
    for (let i = 0; i < listType.length; i += 1) {
      if (listType[i].cname === weapon) {
        return (
          <label>
            <img
              className={this.props.classes.typeImage}
              key={listType[i].name}
              src={listType[i].image}
              alt={listType[i].name}
            />
            {weapon}
          </label>
        )
      }
    }
    return <label>{weapon}</label>
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
          <Table className={classes.table} aria-labelledby="tableTitle">
            <MucTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              rows={tableCharHead}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n: CharInfo) => {
                  const isSelected = this.isSelected(n.id)
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onClick={event =>
                            this.handleSelect(event, n.atF, n.dfF, n.hpF)
                          }
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.name}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {this.renderTypeIcon(n.weapon)}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.rarity}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.plain}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.hpF}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.atF}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.dfF}
                      </TableCell>
                      <TableCell align="left" padding="dense">
                        {n.totF}
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
    charInfo: state.reducerQuery.output,
    charInput: state.reducerCalc.charInput
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actionsC: bindActionCreators(ActionsCalc as any, dispatch)
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableChar)
)

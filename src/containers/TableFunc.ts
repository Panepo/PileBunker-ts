export function desc(a: object, b: object, orderBy: string): 1 | 0 | -1 {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function stableSort(array: any[], cmp: any) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export function getSorting(order: 'asc' | 'desc', orderBy: string) {
  return order === 'desc' ? (a: object, b: object) => desc(a, b, orderBy) : (a: object, b: object) => -desc(a, b, orderBy);
}

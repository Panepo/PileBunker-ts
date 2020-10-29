export const indexOfObject = (
  datas: Object[],
  key: string,
  search: string
): number => {
  let output: number = -1
  datas.some((data: Object, index: number) => {
    if (data[key] === search) {
      output = index
      return true
    } else return false
  })
  return output
}

export const containOfObject = (
  datas: Object[],
  key: string,
  search: string
): boolean => {
  let output: boolean = false
  datas.some((data: Object) => {
    if (data[key] === search) {
      output = true
      return true
    } else return false
  })
  return output
}

export const dynamicSort = (field) => {
  let sortOrder = 1
  if (field[0] === '-') {
    sortOrder = -1
    field = field.substr(1)
  }
  return (a, b) => {
    const result = (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0
    return result * sortOrder
  }
}

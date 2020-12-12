export const checkRowValidForSearch = (rowModel, searchPhrase) => {
  return row => {
    let isValid = false
    for (let i = 0; i < rowModel.length; i++) {
      if (row[rowModel[i]] && String(row[rowModel[i]]).search(searchPhrase) !== -1) {
        isValid = true
        break
      }
    }
    return {
      ...row,
      isValid
    }
  }
}

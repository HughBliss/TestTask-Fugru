export const splitArray = (size) => {
  return (resultArray, item, index) => {
    const chunkIndex = Math.floor(index / size)
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }
}

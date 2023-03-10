function mergeSort(array) {
  if(array.length === 0) return "I need an array with items..."
  if(array.length === 1) return array 

  // split the array
  const halfLength = Math.floor(array.length / 2)
  const leftHalf = array.slice(0, halfLength)
  const rightHalf = array.slice(halfLength, array.length)

  return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

function merge(left, right) {
  const mergedArray = []

  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex])
      leftIndex++
    } else {
      mergedArray.push(right[rightIndex])
      rightIndex++
    }
  }

  while(leftIndex < left.length) {
    mergedArray.push(left[leftIndex])
    leftIndex++
  }

  while(rightIndex < right.length) {
    mergedArray.push(right[rightIndex])
    rightIndex++
  }
  return mergedArray
}

const array = [3, 1, 2, 4]

console.log(mergeSort(array))

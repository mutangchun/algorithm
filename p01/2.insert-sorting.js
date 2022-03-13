function insert(dataArray, x){
  // p指向下一下需要比较的元素
  let p = dataArray.length - 1
  // 当前元素大于要插入的元素，且p>=0时条件成立，这里用等于是由于空位元素位于p+1，要在p+1上插入新元素所以
  while(dataArray[p] > x && p >= 0) {
    dataArray[p + 1] = dataArray[p]
    p--
  }
  dataArray[p + 1] = x
}

// const dataArray = [2,4,7,9,13]
// const x = 1
// insert(dataArray, x)
// console.log(dataArray)

// function insertHandle(A, i, x) {
//   let p = i - 1

//   while(A[p] > x && p >=0) {
//     A[p + 1] = A[p]
//     p--
//   }

//   A[p+1] = x
// }

function insertHandle(A, i, x) {
  const index = searchIndex(A, i, x)
  for (let r = i - 1; r >= index; r--) {
    const temp = A[r]
    A[r] = A[r + 1]
    A[r + 1] = temp
    console.log(index, 'index')
  }
}

function searchIndex(arr, i, x) {
  let l = 0,
      r = i - 1,
      g
      
  while(l <= r) {
    g = Math.floor((l + r) / 2)

    if (arr[g] < x) {
      l = g + 1
    } else {
      r = g - 1
    }

  console.log('==========', l, r, '===========', arr)

  }
  return l
}
function insertion_sort(A){
  for (let i = 1; i < A.length; i++) {
    insertHandle(A, i, A[i])
  }
}

const A = [9,2,4,7,9,6]
insertion_sort(A)
console.log(A)



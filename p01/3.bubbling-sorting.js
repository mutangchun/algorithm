// function bubble_sort(A) {
//   for (let i = A.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j ++) {
//       const temp = A[j]
//       if (temp > A[j+1]) {
//         A[j] = A[j+1]
//         A[j+1] = temp
//       }
//     }
//   }
// }
function swap(A, a, b) {
  const temp = A[a]
  A[a] = A[b]
  A[b] = temp
}
function bubble_sort(A) {
  for (let i = A.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++){
       A[j] < A[j - 1] && swap(A, j, j - 1)
    }
  } 
}

const A = [9,2,4,7,9,6]
bubble_sort(A)
console.log(A)
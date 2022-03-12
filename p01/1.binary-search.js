function bsearch(A, x){
  let l = 0,
      r = A.length - 1,
      g
  
  while (l <= r) { // 小于等于r 代表有数据
    g = Math.floor((l + r) / 2)
    if (A[g] === x) {
      return g
    } else if (A[g] > x) {
      r = g - 1
    } else {
      l = g + 1
    }
  }

  return -1
}
const A = [3,5,19,22,25,33,45]
console.log(bsearch(A,3))

/**
 * 1.循环不变式
 * 循环之前关键变量是几满足什么样的条件，循环完成之后变量是几满足什么样的条件，循环正确那么每一步是正确的，每一步是正确循环不不变式的条件总是要维护
 * 比如：
 *    循环前：l代表右边界，r代码右边界，g代表中间位置
 *    循环后：l、r、g都存在
 * 如果都成立代表正确
 * 
 * 循环不变式
 */
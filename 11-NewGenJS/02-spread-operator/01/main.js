const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

// let num1 = nums1 
// let num2 = nums2
// console.log(...num1)
// console.log(...nums2)

let numBer = [5,...nums1,-6,-1,...nums2];
console.log (numBer)

let sumNumber = numBer.reduce(function(acc,item,index,arr){
  acc = acc+item 
  return acc;

},0)
console.log(sumNumber)
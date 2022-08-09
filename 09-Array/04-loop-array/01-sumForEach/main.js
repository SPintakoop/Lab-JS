const array = [29, 17, 13, 47, 23, 31];
let sum=0
function runEveryItem(item, index, array) {
    sum += item
}
array.forEach(runEveryItem)
console.log(sum)
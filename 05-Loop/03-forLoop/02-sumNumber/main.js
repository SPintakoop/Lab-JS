let sumNumber = 0
let sumEven = 0
let sumOdd = 0
let sumSquareOfTwo = 0
let sumSquareofThree = 0

for (let i<=1 ; i<=100; i++ ){
    sumNumber += i
}if(i%2 === 0){
    sumEven += i
    sumSquareOfTwo += i **2;
}if(i%2 === 1){
    sumOdd +=I
}if(i%3 === 0){
    sumSquareofThree += i **2;
}
console.log("SumAllNumber",sumAllNumber)
console.log("SumEven",sumEven)
console.log("SumOdd",sumOdd)
console.log("SumDifferent",sumSquareOfTwo-sumSquareofThree)
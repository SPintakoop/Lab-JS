const arrayInt = [1, 2, 30, 400];
// result: [2, 4, 60, 800]

const resultInt = arrayInt.map(function(item,index,arr){
return item*2
})
console.log(resultInt)


const arrayNum = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]

const resultNum = arrayNum.map(item=>String(item))


const arrayNumber = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const resultNumber = arrayNumber.map(item=>typeof(item))
console.log(resultNumber)

const arrayFruit = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const resultArrayFruite = arrayFruit.map(item=>String(item))
console.log(resultArrayFruite)

const arrayTpyeNum = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const resultTpyeNum = arrayTpyeNum.map()


const array = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]



const array = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]

const Month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const arrayMonth = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const resultMonth = arrayMonth.map(item,index)=>Month[item]
console.log(resultMonth)


const arrayNumUp = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
const resultNumUp = arrayNumUp.map(function(item,index,arr){
    return item
})
console.log(resultNumUp)

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]

const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const arrayOfObjectFruitBirth = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const current_year = '2021'
const resulfArrayOfObjectFruitBirth = arrayOfObjectFruitBirth.map(item=>{
    
    let age = current_year - item.birth.slice(0,4)

    return{...item,age:age}
})



const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

const disply = array.map(function(item,index,arr){
    let name = item.name
    let date = item.birth.slice(-2)
    let month = item.birth.slice(5,7)
    let monthName = Month[month-1].toLowwerCase()
    let year = item.birth.slice(0,4)
    return `<tr><td>${Name}</td><td>${date},${monthName},${year}</td></tr>`
})
console.log (return)
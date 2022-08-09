let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, pete, mary];

function getAverageAge(array){
    let sumAge = array.reduce(function(acc,item){
        let age = item.age
    },0)
    let getAverageAge = sumAge/array.length
    return averageAge
}

/*
input:array
oupput : object
*/

let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce(fuction(acc,item,index,array){
let currentKey = acc[item] {  
    if(! currentKey){
        acc[item]=1
    }else{
        acc[item]=acc[item]+1
    }
    return acc
},{})
console.log(result)

let str = 'I live in Thailand';

let lowerCase = str.toLowerCase ()
const arrChar = lowerCase.split("")

const result = arrChar.reduce(function(acc,item){
    if(item.trim() !== " "){
        let foundValue = acc[item] 
        if(foundValue){
            acc[item]+=1
        }else{
            acc[item]=1
        }
    }
    return acc
},{})
console.log(result)
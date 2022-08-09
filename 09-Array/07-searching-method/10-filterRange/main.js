const arr = [1,2,3,4,5,6,7,8,9,10]

function filterRange(array,lowerBound,UpperBound){
    const resultArr = array.filter(item=>item >= lowerBound && item <= upperBound)
    return resultArr
}
const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];
  
  function calAverage (array){
    let totalPoint = array.reduce(funtion(acc,item,index,arr){
        let score = item.score * item weight
        let newTotalPoint=acc+score

        totalWeight += item.weight
        return newTotalPoint
    },0)
    return totalPoint/totalWeight
  }
console.log(calAverage)
  

//   let summaryObj = array.reduce((acc,item,index)=>{
//     acc.score+= item.score * item.weight
//     acc.weight += item.weight
//     return acc
//   },{score:0,weight:0})
//   return summaryObj.score / summaryObj.weight 

// calAverage (scores)
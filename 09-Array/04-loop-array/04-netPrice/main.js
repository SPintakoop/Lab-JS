const summary = [
    { netPrice: 900 },
    { netPrice: 475 },
    { netPrice: 100 }
]

function calSummary(saleArray) {
    const summaryArray = []
    //logic loop revery item//
    for (let item of saleArray) {

        let currentObj = {}
let netPrice = item.price * item discount
        currentObj.netPrice = netPrice
        summaryArray.push(currentObj)
    }

    return summaryArray
}
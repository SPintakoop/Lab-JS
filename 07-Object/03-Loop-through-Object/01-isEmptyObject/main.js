function isEmptyObject (obj) {
    for(let key in obj) {
        console.log(key)
        return false 
    }
    return true
}
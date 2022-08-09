function truncate(str,length){
    if(str.length>length){
        let modifyString = str.slice(0,lenght-1)
        //helloMyFriend.slice(0,4)
        return modifyString
    } else{
        return str
    }
}
console.log(truncate("helloMyFriend"5))
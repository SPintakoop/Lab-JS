function checkPrmission (role,cb1,cb2) {
    if (role === 'ADMIN'){
        cb1();
    }else{
        cb2()
    }
}

//callback when admin
let adMinExecute = function (){
    alert("ACCESS GRANTED")
}

//callback when guest
let guessExecute =() =>alert"ACCESS DENIED"


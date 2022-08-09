let num = prompt ("Enter Number")
if (num === null || num ===  '' || num.trim() === '' || isNaN(num)){
    alert("Invalid Number")
} else if(num>0) {
    alert("Positive Number")
  
} else if (num %2 ) {
    alert("Even number")
} else {
    alert("Negative number")
}
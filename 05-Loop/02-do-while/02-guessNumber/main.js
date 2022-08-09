let answer = prompt("Player 1 : Enter Number");

if(+answer <1||+answer>99){
    alert('Invalid Ranger')
}else{
    let answer 2=0;
    let player 2;
    do{
        player2=prompt('Player2:Enter Number')
        count++
        if(+player2 == answer){
            alert('Correct');
            alert(count)
        }else if (+player2<+ answer&&+player2>0){
            alert("Less then")
        }else if (+player2>+answer){
            alert ('More than')
        }else{
            alert('Please input number between 1-99')
        }
    }while (player2 != answer)
}
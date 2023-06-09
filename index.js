// console.log("hello alien !");

var principal = document.getElementById('principal');
var time = document.getElementById('time');
var rate = document.getElementById('rate');

function calculateLoan(){

    if(principal.value>100000000 || principal.value == 0 || time.value >10 || time.value == 0 || rate.value >100){
      document.getElementById('result').innerHTML ="!!! INCORRECT INPUT VALUES !!!" ;
    }
    else{
        let finalInterest = principal.value * time.value * rate.value ;
        document.getElementById('result').innerHTML ="simple interest is = " + finalInterest;

        // if(finalInterest === undefined){
        //     document.getElementById('result').innerHTML ="!!! INCORRECT INPUT VALUES !!!";
        // }
        // else{
        //     document.getElementById('result').innerHTML ="simple interest is = " + finalInterest;
        // }
    }

}
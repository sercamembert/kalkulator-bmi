let button = document.getElementById('saveBtn')

button.addEventListener("click", () =>{
    const wzrost = parseInt(document.getElementById('wzrost').value);
    const waga = parseInt(document.getElementById('waga').value);
    const result = document.getElementById('bmiA');
    const bmi = (waga / ((wzrost * wzrost)/10000)).toFixed(1);
result.innerHTML = `Twoje bmi: ${bmi}`;
var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var l3 = document.getElementById('l3');
var l4 = document.getElementById('l4');

var l5 = document.getElementById('l5');
var l6 = document.getElementById('l6');
var l7 = document.getElementById('l7');
var l8 = document.getElementById('l8');
function removeElse(nr){
    for(var i=0; i<nr;i++){
        $(`#l${i}`).removeClass('ulThis');
        for(var j=8; j>nr;j--){
            $(`#l${j}`).removeClass('ulThis');
            
        }
    }
}
if(bmi <= 16) {
    $('#l1').addClass('ulThis');
    removeElse(1);
}
else if(bmi >= 16 && bmi <= 16.9) {$('#l2').addClass('ulThis');removeElse(2);}
else if(bmi >= 17 && bmi <= 18.5) {$('#l3').addClass('ulThis');removeElse(3);}
else if(bmi >= 18,5 && bmi <= 24.9) {$('#l4').addClass('ulThis');removeElse(4);}

else if(bmi >= 25 && bmi <=29.9) {$('#l5').addClass('ulThis');removeElse(5);}
else if(bmi >=30 && bmi <=34.9) {$('#l6').addClass('ulThis');removeElse(6);}
else if(bmi >=35 && bmi <= 39.9) {$('#l7').addClass('ulThis');removeElse(7);}
else {$('#l8').addClass('ulThis');removeElse(8);}

});



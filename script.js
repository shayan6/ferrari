// Definning funcions ########################################################### 
function checkDriverAge(){
    return	prompt("What is your age?");
}
function testDriverAge(num){
	if (Number(num) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(num) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(num) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}


// Processing funcions #########################################################
var age = checkDriverAge();		
while( !Number.isInteger( +age ) ){
	alert("Number Must Be An Integer");
	age = checkDriverAge();
}
testDriverAge(age);

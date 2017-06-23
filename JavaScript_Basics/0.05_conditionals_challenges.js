var coltsWin = 1;
var patsWin =2;


if(coltsWin > patsWin){
	console.log("Haha get rekt nerds!");
} else if (coltsWin < patsWin){
	console.log("PATS CHEATED!!!");
} else if (coltsWin === patsWin){
	console.log("They are currently cheating");
}




// fizz = dividable by 3
// buzz = dividable by 5
// fizzbuzz = dividable by both 3 && 5
for(var c = 0; c < 101; c++){
	if (c % 3=== 0 && c % 5===0){
		console.log("FizzBuzz");
	} else if(c % 3 === 0){
		console.log("Fizz");
	} else if (c % 5 === 0){
		console.log("Buzz");
	} else {
		console.log(c);
	}
}
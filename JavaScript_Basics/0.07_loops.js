//for loops
//iteration
//startingpoint//condition//operation
for(var i = 1; i < 11;i++){
	console.log(i);
}
console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")
for(var c = 5; c < 11; c++){
	console.log(c);
}
console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")
for(var c = 10; c > 0; c--){
	console.log(c);
}
console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")
// i++ is shorthand-> i = 1 + 1
for(var c = 0; c < 101; c+=5){
	if(c === 50){
		console.log("Fifty");
	} else {
		console.log(c);
	} 
}
console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")
 //challenges
for(var i =0; i<21; i+=2){
	console.log(i);
}
console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")

for(var i =0; i<101; i+=25){
	console.log(i);
}
console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")

for(var i=1; i<11; i++){
	if(i===9){
		console.log("nine");
	} else if(i===10){
		console.log("ten");
	} else {
		console.log(i)
	}
}	
console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")
//while loop
var counter=0;
while(counter<100){
	counter+=25;
	if(counter === 50){
		console.log("That's Halfway!");
	} else {
		console.log(counter);
	}
}



console.log("                    ")
console.log("                    ")
console.log("********************")
console.log("                    ")
console.log("                    ")

//FIZZBUZZ!!!!!
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

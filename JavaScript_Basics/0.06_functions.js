//function
//declaration of a function


function hello(){
	console.log("Hello World");
}

hello();
//^calling function


var hey = function(){
	console.log("Hey");
}

hey();



function nameGame(){
	console.log("ye");
}
nameGame();



function addTwos(){
	var x = 2;
	var y = 2;
	console.log(x + y);
}

addTwos();


function twentyOne (){
	var c = 7;
	var p = 3;
	console.log(c * p + " Savage");
}

twentyOne();






function numberEntered(x){
	console.log("The number entered is: ", x );
}
 numberEntered(5);
 numberEntered(7);
 numberEntered(100000);



 function numberEnterD(rara, y, z){
	console.log("The sum is: ", rara + y + z);
}
 numberEnterD(5, 5, 7);
 numberEnterD(7, 6, 9);
 numberEnterD(100000, 12, -100000);




 function fullname(first, last){
 	console.log("Full Name:", first +" "+ last);
}
fullname("Chad", "Perdue");



function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	console.log(details);
	return details;
}

petNameAndBreed("Rufus", "Weiner Dog");



//Write Function that calculates price after taxes
//price of 10 candy bars
//allow to enter more than one product
//Sales Tax 0.07


function taxes(price, x){
	var tax = 0.07;
	var initPrice = price * x;
	var taxQuan = initPrice * tax;
	var finalTotal = initPrice + taxQuan;
	console.log("Initial Price:", + initPrice);
	console.log("Taxes:", + taxQuan);
	console.log("Price after Taxes:", + finalTotal);
}

taxes(3 * 10);
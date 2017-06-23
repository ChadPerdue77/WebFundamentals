

function printCityState (city, state){
	console.log("I am from "+ city + ", " + state);
}
printCityState("Beech Grove", "Indiana")

function printBills (water, heat, electric){
	var total= water+heat+electric;
	console.log("I will pay " +"$" + total + " in bills this month")
}
printBills(12, 12, 12)

function printEvenOrOdd (x){
	if (x % 2 === 0){
		console.log(x + " Is Even");
	} else {
		console.log (x + " Is Odd");
	}
}
 printEvenOrOdd(12);
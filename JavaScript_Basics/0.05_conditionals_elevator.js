var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorIsStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up!");
} else {
	console.log("Going down");
}
if(elevatorBroken === true){
	console.log("Sorry, find the stairs pleb.");
} else{
	console.log("Which floor would you like to visit");
}
if(elevatorIsStuckWhileWeAreOnIt){
	console.log("We are stuck like chuck bud.");
}
if(elevatorBroken && elevatorDown){
	console.log("R.I.P.");
}
if(elevatorNumber == "13" && elevatorIsStuckWhileWeAreOnIt){
	console.log("R.I.P. x2");
}
// 13808
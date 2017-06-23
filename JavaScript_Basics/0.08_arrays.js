
var movies = ["The Wolf of Wallstreet", "Pulp Fiction", "Forest Gump"];

var nbaPlayerNumbers=[12, 14, 24, 8];

var mixedArray = ["Broccoli", 21, true];

console.log(movies[0]);

console.log(mixedArray[0]);

for(var c = 0; c < movies.length ; c++){
	console.log(movies[c]);
}

var fastfood = ["Wendy's", "SNS", "McDonalds", "BK"];
fastfood.sort();
for(var c = 0; c< fastfood.length; c++){
	console.log(fastfood[c]);
}

//challenges
var hobbies= ["Music", "Gaming", "Cracking open a cold one with the boys"];
for (var i =0; i< hobbies.length; i++){
	console.log(hobbies[i]);
} 
var cars= ["Audi S8", "Miata", "CarCarCar"];
for (var i =0; i< cars.length; i++){
	console.log(cars[i]);
} 

var candy= ["Sweedish Fish", "Candybar", "KrabbyPatties"];
	console.log(candy.length);
	console.log(candy);
candy.push("skittles");
console.log(candy);

//Object Literal
var player = {
	//PROPERTIES
	name 			: "",
	life 			: 100,
	damage			: 0, //attack points
	hasSniperRifle 	: true,
	hasSword		: false,
	rank 			: ["Sniper", "Goon", "Stang", "GrimeyWizard"],
 
	//METHODS//
	challenge		: function(){
		console.log("Aye, you wanna fight "+ this.name +"?");
	},
	pickedUpSword	: function(){
		if (this.hasSword === true){
			this.damage += 20;
			console.log(this.name + " picked up the sword");
		}
	},
	attack			: function(target){
		console.log(this.name + " attacks " + target.name + " for " + this.damage);
		target.life -= this.damage;
		console.log(target.name + "'s remaining HP is " + target.life);
	},

};


	// body...
var saul = Object.create(player);
saul.name = "Saul";
saul.life = 120;
saul.damage = 20;
saul.hasSniperRifle= false;
saul.rank = "Stang";


var chad= Object.create(player);
chad.name = "Chad";
chad.life = 777;
chad.damage = 1;
chad.hasSniperRifle=true; //snipergang
chad.hasSword = true;
chad.rank= "GrimeyWizard";




chad.challenge();
saul.attack(chad);
chad.pickedUpSword();
console.log(chad.damage);
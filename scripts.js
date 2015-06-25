//Co-op, the text-based RPG.
var p1 = {
	'name' : "Hero-kun",
	'age' : 16,
	'stats' : {
		'Martial' : 0,
		'Physical' : 0,
		'Social' : 0,
		'Magic' : 0,
		'Resilience' : 3
	},
	'equipment' : {
		'thingOne': 0,
		'thingTwo': 0
	},
	'statPoints': 10,
	'equipmentPoints': 10,
	'murders': 0
};
var p2 = {
	'name' : "Sidekick-chan",
	'age' : 16,
	'stats' : {
		'Martial' : 0,
		'Physical' : 0,
		'Social' : 0,
		'Magic' : 0,
		'Resilience' : 3
	},
	'equipment' : {
		'thingOne': 0,
		'thingTwo': 0
	},
	'statPoints': 10,
	'equipmentPoints': 10,
	'murders': 0
};

// Below: play1() is no longer necessary, and play2() should become play(),
// replacing play1() and play3() (play3() is in index.html).

function play1() {
	console.log("Welcome to OpenBox Co-op v1! Test control!")
	document.getElementById("narrationBox").innerHTML = "Welcome to OpenBox Co-op v1! \
	You clicked the first button, which is known to work. <br> <br> Player \
	one is " + p1.name + " and player two is " + p2.name + ".";
}

// Above: play1() is no longer necessary, and play2() should become play(),
// replacing play1() and play3() (play3() is in index.html).

/*var changeNarration = function (){
	document.getElementById("narrationBox");
}*/

// The stuff immediately above seems to be overridden by <script> in index.html

function play2() {
	changeNarration.innerHTML = "Welcome to OpenBox Co-op v1! \
	You clicked the second button, which works now. <br> <br> Player \
	one is " + p1.name + " and player two is " + p2.name + ".";
}

function martialChange(changingPlayer, bool){ // player is p1 or p1; bool is a Boolean
	if (bool == true) {
		if ((changingPlayer.statPoints>0)&&(changingPlayer.stats.Martial<5)){
			changingPlayer.stats.Martial++; 
			changingPlayer.statPoints--;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Martial==5){
			console.log("Martial cap reached. Put your remaining points elsewhere.")
		} else	{
			console.log("No points left.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	} else if (bool == false){
		if (changingPlayer.stats.Martial>0){
			changingPlayer.stats.Martial--; 
			changingPlayer.statPoints++;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Martial==0){
			console.log("You can't reduce Martial below 0. Find points elsewhere.")
		} else	{
			console.log("Something impossible happened.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	}
}
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

function play1() {
	console.log("Welcome to OpenBox Co-op v1! Test control!")
	document.getElementById("narrationBox").innerHTML = "Welcome to OpenBox Co-op v1! \
	You clicked the first button, which is known to work. <br> <br> Player \
	one is " + p1.name + " and player two is " + p2.name + ".";
}

// The above works fine, but will be repetitive in the long run.

// The following is a version of the above that uses fewer letters in the long run, but
// produces the error 
//	 "TypeError: Cannot set property 'innerHTML' of null"
// when run.

var changeNarration;
changeNarration = document.getElementById("narrationBox");

function play2() {
	console.log("Test #2!")
	document.getElementById("narrationBox").innerHTML = "If you're seeing this, you got the error.";
	changeNarration.innerHTML = "If you're seeing this, play2() works now and you won.";
}

// The stuff between this comment and the one above it is for testing.

function martialUp(changingPlayer){
	if ((changingPlayer.statPoints>0)&&(changingPlayer.stats.Martial<5)){
		changingPlayer.stats.Martial++; // player is p1 or p1
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
}
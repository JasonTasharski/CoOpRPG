//Co-op, the text-based RPG.

//var narBox = document.getElementById("narrationBox");

var p1 = {
	'name' : "You",
	'age' : 16, // accepted range 14-90
	'pronoun' : 2, // 0 is "she", 1 is "he", 2 is "they"
	'stats' : {
		'Martial' : 0,
		'Physical' : 0,
		'Social' : 0,
		'Magic' : 0,
		'Resilience' : 3
	},
	'equipment' : [],
	'statPoints': 10,
	'equipmentPoints': 10,
	'murders': 0
};
var p2 = {
	'name' : "Friend",
	'age' : 16, // accepted range 14-90
	'pronoun' : 2, // 0 is "she", 1 is "he", 2 is "they"
	'stats' : {
		'Martial' : 0,
		'Physical' : 0,
		'Social' : 0,
		'Magic' : 0,
		'Resilience' : 3
	},
	'equipment' : [],
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



// The stuff immediately above seems to be overridden by <script> in index.html

//function play2() {
	// document.getElementById("narrationBox").innerHTML = "Error.";
// var narBox = document.getElementById("narrationBox");
// 	narBox.innerHTML = "Welcome to OpenBox Co-op v1! \
// 	You clicked the second button, which works now. <br> <br> Player \
// 	one is " + p1.name + " and player two is " + p2.name + ".";
// }

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
function physicalChange(changingPlayer, bool){ // player is p1 or p1; bool is a Boolean
	if (bool == true) {
		if ((changingPlayer.statPoints>0)&&(changingPlayer.stats.Physical<5)){
			changingPlayer.stats.Physical++;
			changingPlayer.statPoints--;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Physical==5){
			console.log("Physical cap reached. Put your remaining points elsewhere.")
		} else	{
			console.log("No points left.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	} else if (bool == false){
		if (changingPlayer.stats.Physical>0){
			changingPlayer.stats.Physical--; 
			changingPlayer.statPoints++;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Physical==0){
			console.log("You can't reduce Physical below 0. Find points elsewhere.")
		} else	{
			console.log("Something impossible happened.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	}
}
function socialChange(changingPlayer, bool){ // player is p1 or p1; bool is a Boolean
	if (bool == true) {
		if ((changingPlayer.statPoints>0)&&(changingPlayer.stats.Social<5)){
			changingPlayer.stats.Social++; 
			changingPlayer.statPoints--;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Social==5){
			console.log("Social cap reached. Put your remaining points elsewhere.")
		} else	{
			console.log("No points left.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	} else if (bool == false){
		if (changingPlayer.stats.Social>0){
			changingPlayer.stats.Social--; 
			changingPlayer.statPoints++;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Social==0){
			console.log("You can't reduce Social below 0. Find points elsewhere.")
		} else	{
			console.log("Something impossible happened.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	}
}
function magicChange(changingPlayer, bool){ // player is p1 or p1; bool is a Boolean
	if (bool == true) {
		if ((changingPlayer.statPoints>0)&&(changingPlayer.stats.Magic<5)){
			changingPlayer.stats.Magic++; 
			changingPlayer.statPoints--;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Magic==5){
			console.log("Magic cap reached. Put your remaining points elsewhere.")
		} else	{
			console.log("No points left.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	} else if (bool == false){
		if (changingPlayer.stats.Magic>0){
			changingPlayer.stats.Magic--; 
			changingPlayer.statPoints++;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Magic==0){
			console.log("You can't reduce Magic below 0. Find points elsewhere.")
		} else	{
			console.log("Something impossible happened.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	}
}
function resilienceChange(changingPlayer, bool){ // player is p1 or p1; bool is a Boolean
	if (bool == true) {
		if ((changingPlayer.statPoints>0)&&(changingPlayer.stats.Resilience<4)){
			changingPlayer.stats.Resilience++; 
			changingPlayer.statPoints--;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Resilience==4){
			console.log("Resilience cap reached (it's 4 for balance reasons). \
				Put your remaining points elsewhere, scrub.")
		} else	{
			console.log("No points left.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	} else if (bool == false){
		if (changingPlayer.stats.Resilience>2){
			changingPlayer.stats.Resilience--; 
			changingPlayer.statPoints++;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Resilience==0){
			console.log("You can't reduce Resilience below 2 (for balance reasons). Find points elsewhere, scrub.")
		} else	{
			console.log("Something impossible happened.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	}
}
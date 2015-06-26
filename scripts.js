// window.addEventListener("DOMContentLoaded", function() {
//Co-op, the text-based RPG.

console.log("testing controlFunction()...");
var controlFunction = function(){
	console.log("controlFunction() tested successfully");
}
controlFunction();

var p1 = {
	'name' : null,
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
	'name' : null,
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

var setName = function(player, newName){
	player.name = newName;
	if (player === p1) {
		document.getElementById("p1Can").innerText = player.name + ":";
	} else if (player === p2) {
		document.getElementById("p2Can").innerText = player.name + ":";
	} else {
		console.log("Sumthin fuckd up.");
	}
}

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

// Below is in progress
var changeStat = function(changingPlayer, changingStat, bool){
	// player is p1 or p1; changingStat is...? bool is a Boolean
	//var playerStats;
	//playerStats = changingPlayer.stats;
	//var thing = playerStats[changingStat];

	if ((changingStat === "Resilience")&&(bool == true)) {
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
	} else if ((changingStat === "Resilience")(bool == false)){
		if (changingPlayer.stats.Resilience>2){
			changingPlayer.stats.Resilience--; 
			changingPlayer.statPoints++;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats.Resilience==0){
			console.log("You can't reduce Resilience below 2 (for balance reasons).\
 Find points elsewhere, scrub.")
		} else	{
			console.log("Something impossible happened.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	} else if (bool == true) {
		if ((changingPlayer.statPoints>0)&&(changingPlayer.stats[changingStat]<5)){
			changingPlayer.stats[changingStat]++; 
			changingPlayer.statPoints--;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats[changingStat]==5){
			console.log("Stat cap reached. Put your remaining points elsewhere.")
		} else	{
			console.log("No points left.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	} else if (bool == false) {
		if (changingPlayer.stats[changingStat]>0){
			changingPlayer.stats[changingStat]--; 
			changingPlayer.statPoints++;
			console.log(changingPlayer.name + " stats:");
			console.log(changingPlayer.stats);
			console.log("Points left: " + changingPlayer.statPoints);
		} else if (changingPlayer.stats[changingStat]==0){
			console.log("You can't reduce a stat below 0. Find points elsewhere.")
		} else	{
			console.log("Something impossible happened.");
			console.log(changingPlayer.name + " stats: " + changingPlayer.stats);
		}
	}
}
var changeEquip = function(changingPlayer, equip, equipCost, bool){
	if ((bool == true) && (changingPlayer.equipmentPoints < equipCost)) {
		console.log("You can't afford that - " + equip + " costs " + equipCost + ", and you\
 only have " + changingPlayer.equipmentPoints " left to spend on equipment. You can get\
 equipment points back by giving up equipment you already have");
	} else if ((bool == true) && (changingPlayer.equipmentPoints >= equipCost)) {
		//changingPlayer['equipment'][changingPlayer['equipment'].length] = equip;
		changingPlayer['equipment'].push(equip);
		changingPlayer.equipmentPoints -= equipCost;
		console.log("Added " + equip);
		console.log("Equipment is now " + toString(changingPlayer['equipment']));
	} else {
		console.log("Nothing added.");
	}
}
// Above this is in progress.

// Make it so there's one button: "Display Player Information".
// id="playerInfo" is a container including two columns, each with one player's information.
// The effect of the button is to affect playerInfo, making it hide or display depending
// on whether it's already displayed or not. Like:
// if (displayed==false){playerInfo.style.display = "block";}
// else if (displayed==true){playerInfo.style.display = "none";}



// })// This line closes the event listener for loading the DOM.
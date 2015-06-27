// window.onload = function() {
//Co-op, the text-based RPG.

console.log("testing controlFunction()...");
var controlFunction = function(){
	console.log("controlFunction() tested successfully");
}
controlFunction();

document.querySelector("#p1Info").style.visibility = "hidden";
var p1InfoVisible = false;
document.getElementById("p2Info").style.visibility = "hidden";
var p2InfoVisible = false;
document.querySelector("#p1Can").addEventListener("click", function(){
	if (p1InfoVisible === false) {
		document.querySelector("#p1Info").style.visibility = "visible";
		p1InfoVisible = true;
	} else if (p1InfoVisible === true) {
		document.querySelector("#p1Info").style.visibility = "hidden";
		p1InfoVisible = false;
	}
})
document.getElementById("p2Can").addEventListener("click", function(){
	if (p2InfoVisible === false) {
		document.getElementById("p2Info").style.visibility = "visible";
		p2InfoVisible = true;
	} else if (p2InfoVisible === true) {
		document.getElementById("p2Info").style.visibility = "hidden";
		p2InfoVisible = false;
	}
})

var p1 = {
	'name' : "player one",
	'age' : 16, // accepted range 14-90
	'pronoun' : "they", // accept "he" and "she"
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
	'name' : "player two",
	'age' : 16, // accepted range 14-90
	'pronoun' : "they", // accept "he" and "she"
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
		console.log("SetName broke; no real player identified.");
	}
	refreshPlayerInfo();
}

var setPronoun = function(player, newPronoun){ // newPronoun is he/she/they
	if ((newPronoun === "she") || (newPronoun === "he") || (newPronoun === "they")){
		player.pronoun = newPronoun;
	} else {
		console.log("Pronoun input not accepted. Right now, \
 we only support 'he,' 'she,' and 'they.'");
	}
	refreshPlayerInfo();
}

var setAge = function(player, newAge){
	if ((newAge >= 13) && (newAge < 60)) {
		player.age = Math.round(newAge);
		console.log("Age accepted. " + player.name + "'s age is now " + player.age + ".");
	} else if ((newAge > 59) && (newAge <= 99)) {
		console.log("Age accepted. Be aware, old age may limit your options.");
		player.age = Math.round(newAge);
	} else if ((newAge > 99) || (newAge < 13)) {
		console.log("Only ages between 13 and 99 accepted.");
	} else {
		console.log("SetAge broke; non-number input.");
	}
	refreshPlayerInfo();
}

var refreshPlayerInfo = function(){ // not DRY yet
document.querySelector("#p1Info").innerHTML = p1.name + "<br>Age: \
" + p1.age + "<br>Pronoun: " + p1.pronoun + "<br><tab>Martial: \
" + p1.stats.Martial + "<br><tab>Physical: " + p1.stats.Physical + "<br><tab>Social: \
" + p1.stats.Social + "<br><tab>Magic: " + p1.stats.Magic;
document.querySelector("#p2Info").innerHTML = p2.name + "<br>Age: \
" + p2.age + "<br>Pronoun: " + p2.pronoun + "<br><tab>Martial: \
" + p2.stats.Martial + "<br><tab>Physical: " + p2.stats.Physical + "<br><tab>Social: \
" + p2.stats.Social + "<br><tab>Magic: " + p2.stats.Magic;
}

function play() {
	console.log("Welcome to OpenBox Co-op v1! Test control!")
	document.getElementById("narrationBox").innerHTML = "Welcome to OpenBox Co-op v1! \
	You clicked the first button, which is known to work. <br> <br> Player \
	one is " + p1.name + " and player two is " + p2.name + ".";
}

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
	refreshPlayerInfo();
}
// Below is in progress
var changeEquip = function(changingPlayer, equip, equipCost, bool){
	if ((bool == true) && (changingPlayer.equipmentPoints < equipCost)) {
		console.log("You can't afford that - " + equip + " costs " + equipCost + ", and you\
 only have " + changingPlayer.equipmentPoints + " left to spend on equipment. You can get\
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
	refreshPlayerInfo();
}
// Above this is in progress.

// Make it so there's one button: "Display Player Information".
// id="playerInfo" is a container including two columns, each with one player's information.
// The effect of the button is to affect playerInfo, making it hide or display depending
// on whether it's already displayed or not. Like:
// if (displayed==false){playerInfo.style.display = "block";}
// else if (displayed==true){playerInfo.style.display = "none";}



// } // This line closes the event listener for loading the DOM.
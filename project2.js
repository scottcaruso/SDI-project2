// Scott Caruso
// Date: 4/4/2012
// Deliverable 2
// Topic: New Free Agent Hitter

// Output function. Story continues regardless. Simply for flavor at start of story.

var getTypeOfPlayer = function (playerType,teamWants) {
	if (playerType === teamWants){
		console.log("\"We're looking for a " + teamWants + " type player. He's exactly what we're looking for!\"");
	} else {
		console.log("\"Well, he's not the prototypical " + teamWants + " type of player that we're looking for, but let's give him a shot.\"");
	}; // End of if statement
}; // End of leadoffHitter function

//Boolean comparison between what salary the player wants versus the amount of budget room we have.

var getBudgetRoomLeft = function (salaryPlayerWants,budgetRoom) {
	if (salaryPlayerWants <= budgetRoom){
		return (budgetRoom-salaryPlayerWants)
	} else {
		return (0)
	}; 
}; // End of getBudgetRoomLeft function

// Input a contract length. Calculate the number of home runs that the player will hit per season based on an anticipated rate of decline.
// Returns a total number of home runs over the duration of the contract. Decline per season, home runs before coming to the team are all
// variable and adjustable.

var homeRunsExpected = function (contractLength) {
	var declinePerSeason = .15;
	var homeRunsLastYear = 52;
	var totalHomeRunsForUs = 0
	var contractYear = (contractLength-(contractLength-1))
		while (contractLength > 0) {
		console.log("We expected that he would hit " + Math.floor(homeRunsLastYear*(1-declinePerSeason)) + " home runs during the " + contractYear + "th year of the contract.");
		contractLength--
		contractYear++
		var homeRunsLastYear=(homeRunsLastYear*(1-declinePerSeason))
		var totalHomeRunsForUs = homeRunsLastYear+totalHomeRunsForUs
		};
			return homeRunsForUs = Math.floor(totalHomeRunsForUs) // returns variable for total home runs he hits as a member of our team
};

//String function, then return a value

var nicknameGenerator = function (playerFirstName,favoriteAnimal){
	var flavors = ["-Legs","-Arms","-Face","-Stink","-Lover"];
	var flavorRandom = Math.floor(Math.random()*(flavors.length));
	var randomFlavor = flavors[flavorRandom];
		return nicknamePlusAnimal = [(favoriteAnimal+randomFlavor+ " " + playerFirstName), favoriteAnimal]
};

// Array, for loop somehow, return a value

var playerOfGameBonus = function (bonus,timesWonPerSeason){
	var totalBonus = 0
	for (i=1; i <= timesWonPerSeason.length; i++) {
		console.log(nickname+"'s bonus for Season " + i + " was $" + bonus*timesWonPerSeason[i-1] + ".")	
	var totalBonus = (bonus*timesWonPerSeason[i-1])+totalBonus
	};
	return totalBonusForUs = totalBonus

};

//Begin story calls
var teamName = "AwesomeSauce";
var teamCity = "Orlando";
var nickname = nicknameGenerator("Scott","Penguin")[0]
var animal = nicknameGenerator("Scott","Penguin")[1]

console.log("As the general manager for the " + teamCity + " " + teamName + ", it is my job to search for the best talent available.")
console.log("A few years back, there was a player - we called him " + nickname + " - that I just couldn't pass up.")
console.log("I still remember the conversation with my assistant general manager clearly.");
console.log("He said to me,");
getTypeOfPlayer("speed","power");
console.log("We knew it would take some number-crunching with the boys in accounting to get the deal done, and we were under a tight budget that year.")
var budgetRoomLeft = getBudgetRoomLeft(1000000,5000000);
console.log("\"If we want to sign this player, we will have $" + budgetRoomLeft + " left for other player transactions,\" they told me.");
console.log("At that point, though, I was sold. No matter what the price, I knew I had to have him.")
console.log("I can still rattle off the projections that we had for him; that's how excited I was!")
homeRunsExpected(7);
console.log("All told, we anticipated that he was going to hit a total of " + homeRunsForUs + " over the life of the contract. And, you know what?")
console.log("He did just that, and earned himself even more cash along the way!")
console.log("You see, the local TV affiliate that broadcasts our games would give away a bonus to the Player of the Game for doing a post-game interview.")
console.log("Well, I don't need to tell you that he won his fair share of those cash bonuses!")
playerOfGameBonus(1500,[6,15,7,2,8,6,0]);
console.log("Over the life of his contract, he earned $" + totalBonusForUs + " in Player of the Game bonuses!")
console.log("Think of all of the " + animal + " food he could buy with that money!")

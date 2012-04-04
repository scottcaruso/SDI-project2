// Scott Caruso
// Date: 4/4/2012
// Deliverable 2
// Topic: New Free Agent Hitter

// Output function. Story continues regardless. Simply for flavor at start of story.

var getTypeOfPlayer = function (playerType,teamWants) {
	if (playerType === teamWants){
		console.log("We're looking for a " + teamWants + " type player. He's exactly what we're looking for!");
	} else {
		console.log("Well, he's not the prototypical " + teamWants + " type of player that we're looking for, but let's give him a shot.");
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
	var homeRunsLastYear = 43;
	var totalHomeRunsForUs = 0
	var contractYear = (contractLength-(contractLength-1))
		while (contractLength > 0) {
		console.log("We expect that he will hit " + Math.floor(homeRunsLastYear*(1-declinePerSeason)) + " home runs during the " + contractYear + "th year of the contract.");
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
		return nickname = favoriteAnimal+randomFlavor+ " " + playerFirstName;
};

// Array, for loop somehow, return a value

var playerOfGameBonus = function (bonus,timesWonPerSeason){
	var totalBonus = 0
	for (i=1; i <= timesWonPerSeason.length; i++) {
		console.log(nickname+"'s bonus for Season " + i + " was $" + bonus*timesWonPerSeason[i-1] + ".")	
	var totalBonus = (bonus*timesWonPerSeason[i-1])+totalBonus
	};
	console.log("Over the life of his contract, he earned $" + totalBonus + " in Player of the Game bonuses.")
};


//Begin story functions
var budgetRoomLeft = getBudgetRoomLeft(1000000,5000000);

getTypeOfPlayer("speed","power");
console.log("If we want to sign this player, we will have $" + budgetRoomLeft + " left for other player transactions.");
homeRunsExpected(7);
console.log(homeRunsForUs);
console.log(nicknameGenerator("Scott","Kangaroo"));
playerOfGameBonus(500,[6,15,7,2,8,6,0]);

// Scott Caruso
// Date: 4/4/2012
// Deliverable 2
// Topic: Picking a new leadoff hitter


//One function that simply outputs, no return

var leadoffHitter = function (playerType,teamWants) {
	if (playerType === teamWants){
		console.log("We're looking for a " + teamWants + " type player. He's exactly what we're looking for!");
	} else {
		console.log("Well, he's not the prototypical " + teamWants + " type of player that we're looking for, but let's give him a shot.");
	}; // End of if statement
}; // End of leadoffHitter function

//Boolean comparison between two arguments and returns a value.

var getBudgetRoomLeft = function (salaryPlayerWants,budgetRoom) {
	if (salaryPlayerWants <= budgetRoom){
		return (budgetRoom-salaryPlayerWants)
	} else {
		return (0)
	}; 
}; // End of getBudgetRoomLeft function

// Single number, while loop somehow, return a value
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
	return homeRunsForUs = Math.floor(totalHomeRunsForUs) // returns variable homeRunsForUs
};

//String function, then return a value

// Array, for loop somehow, return a value




//Begin story functions
var budgetRoomLeft = getBudgetRoomLeft(1000000,5000000);

leadoffHitter("speed","power");
console.log("If we want to sign this player, we will have $" + budgetRoomLeft + " left for other player transactions.");
homeRunsExpected(7);
console.log(homeRunsForUs);
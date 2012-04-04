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
}; // End of CashLeft function

// Single number, while loop somehow, return a value
var getNumberOfPlayersToSign = function (budgetRoomLeft,avgCostOfPlayers) {
	while (i=0

};

//String function, then return a value

// Array, for loop somehow, return a value

leadoffHitter("speed","power");
console.log("If we want to sign this player, we will have $" + getBudgetRoomLeft(1000000,5000000) + " left for other player transactions.")


// Adding a comment simply to modify the file for a test addition to the respository;

/* Comments to remind myself about logical operation operators

AND p && q
OR p || q
NOT !p
XOR (p || q) && !(p && q)

*/

/* Practice problems
Given p ∧ (q ∨ r)

if (p && (q || r) ) {
	console.log ("The expression is true");
} else {
	console.log ("The expression is false");
}

Given (p ∧¬ q) ∨ (q ∧ r)
if ((p && !q) || (q && r) {
	console.log ("The expression is true");
} else {
	console.log ("The expression is false");
}

Given ¬(p ∨ r)
if !(p || r) {
	console.log ("The expression is true");
} else {
	console.log ("The expression is false");
}
*/

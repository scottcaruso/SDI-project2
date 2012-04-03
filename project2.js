// Scott Caruso
// Date: 4/4/2012
// Deliverable 2
// Topic TBD

var managerName = "Joe Smith",
	teamName = "Ruffians",
	opponentName = "Pansies",
	inningsPitchedByStarter = 5,
	pitchersInBullpen = [
		"Lefty Jones",
		"Righty Adams",
		"Southpaw Stevens",
		"Johnny Strikeout",
		"Sam Malone",
		"Rick Vaughn"
	],
	pitchersToRelease = 3
;

/*Number Function  -- This code includes a function for calculating the number of innings left, then performs a "while"
statement to determine when the manager can finally go to the bullpen.
*/

var getInningsLeft = function (i) {
	var inningsLeft = 9 - i;
	return inningsLeft;
};

var inningsLeft = getInningsLeft(inningsPitchedByStarter);
console.log(inningsLeft);

while (inningsLeft > 2) {
	console.log("There are " + inningsLeft + " innings left until the manager can use his bullpen.");
	inningsLeft--;
};

console.log("Now the manager can use his bullpen!")
console.log(inningsLeft);


/*
It was Game 7 of the World Series, and [managerName] was sweating bullets.
His team was ahead by 1 run, but there were still [outsLeft=27-(inningsPitcherByStarter*3)] outs
left to get before the [teamName] could hold the trophy up high. And worse?
Ace pitcher Roy Verlander-Hernandez was clearly out of gas.

(if outsLeft > 6)
Unfortunately, he only has [pitchersInBullpen.length] in the bullpen, and
each one of them can only be counted on to get 1 batter out each. He would
have to stick with Roy for (7-currentInning) more innings before he could
turn it over to his relievers.

Alas, the ace was unable to reach the 8th inning, and the championship was
lost to the [opponentName] in embarrasing fashion. [managerName] was soon fired,
and [pitchersInBullpen.pop()_*3] were cut as well.

(if outsLeft = 6)
Thankfully, [managerName] has the best relief corps in baseball, with the
caveat that each pitcher can only reliably retire one hitter before needing
to be removed. He had just enough arms to close it out!

Then, in the following order, the [teamName]'s relief pitchers came out to shut
the door on the [opponentName] to win the championship!

for (var i=0, k=pitchersInBullpen.length; i < k; i++) {
	console.log(pitchersInBullpen [i])
};

[managerName] was showered with praise and given the key to city, all thanks
to the sterling work of his [pitchersInBullpen.length] relief pitchers!

(if outsLeft > 6)
Thankfully, [managerName] has the best relief corps in baseball, with the
caveat that each pitcher can only reliably retire one hitter before needing
to be removed. Since Roy had already gone [inningsPitchedByStarter], [managerName]
had outs to spare!

variableName.shift()*outsLeft to get the pitchers that were used.

Then, in the following order, the [teamName]'s relief pitchers came out to shut
the door on the [opponentName] to win the championship!

for (var i=0, k=pitchersInBullpen.length; i < k; i++) {
	console.log(pitchersInBullpen [i])
};

//array syntax
//variableName [x] where x = position of element in array
//e.g. pitchersInBullpen [2] would be "Southpaw Stevens"
//can add items to array later in code
//use variableName [y] where y = some array position that doesn't exist
//e.g. pitchersInBullpen [5] = "Lee Smith";
//to add something to end of array, use "push" command
//e.g. pitchersInBullpen.push = ("Lee Smith");
//variableName.pop and variableName.shift to remove last or first items

for (var i=0, k=pitchersInBullpen.length; i < k; i++) {
	console.log(pitchersInBullpen [i])
};


var pi = 3.14159;
var radius = 5;

var getArea = function (r, name, message) {
	var area = r * r * pi;
	console.log(name + "'s circle has " + area + ", and" + message + ".")
};
	
getArea(2, "Mike", "is awesome");
getArea(5, "Rick", "is brilliant");
getArea(10, "Ceiling cat", "is all seeing");


//Comments and practice work below

// While/For - condition checked repeatedly until the condition is no longer true.
//Need to have a while and a for in the project.


/*
While/For practice code
var bonab = 99;

while (bonab > 0) {
	console.log(bonab + " bottles of non-alcoholic beverage on the wall.");
	bonab--;
};

console.log("No more bottles of non-alcholic beverage.");


// For - 

for (var bonab = 99; bonab > 0; bonab--) {
	console.log(bonab + " bottles of non-alcoholic beverage on the wall.");
};

console.log("No more bottles of non-alcholic beverage.");


//typical usage of for loop listed below
for (var i = 0; i < max; i++) {};
*/













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

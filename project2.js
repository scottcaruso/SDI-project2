// Scott Caruso
// Date: 4/4/2012
// Deliverable 2
// Topic TBD

// While - condition checked repeatedly until the condition is no longer true.

var bonab = 99;

while (bonab > 0) {
	console.log(bonab + " bottles of non-alcoholic beverage on the wall.");
	bonab--;
};

console.log("No more bottles of non-alcholic beverage.");



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
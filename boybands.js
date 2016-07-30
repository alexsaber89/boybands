var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

//Loop through the two arrays provided (bands and vegetables)
//Output each element in the arrays into their corresponding HTML <div> element
//Ensure that each item is in a block element (e.g. li, div, p. etc...)

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

// Keep track of which band/veggie we're on in the loop
var currentBand = bands[loopTracker];
var currentVeggie = vegetables[loopTracker];

  // Add the band names into the correct <div>
  bandElement.innerHTML += "<p>" + currentBand + "</p>";
  console.log("The current band is " + currentBand);

  // Add the veggie names into the correct <div>
  veggieElement.innerHTML += "<p>" + currentVeggie + "</p>";
  console.log("The current vegetable is " + currentVeggie);
}
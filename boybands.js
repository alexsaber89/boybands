var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

//Loop through the two arrays provided (bands and vegetables)
//Output each element in the arrays into their corresponding HTML <div> element
//Ensure that each item is in a block element (e.g. li, div, p. etc...)

// The number of loops to perform (what if the array changes?)
var bandsLoopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = console.log(bands[loopTracker]);

// Keep track of which veggie we're on in the loop
var currentVeggie = console.log(vegetables[loopTracker]);

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < bandsLoopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  bandElement.innerHTML += "<p>" + bands[loopTracker] + "</p>";
  currentBand;


  // Add the veggie names into the correct <div>
  veggieElement.innerHTML += "<p>" + vegetables[loopTracker] + "</p>";
  currentVeggie;

}
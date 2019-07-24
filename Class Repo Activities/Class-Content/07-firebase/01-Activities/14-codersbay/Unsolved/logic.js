// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var firebaseConfig = {
  apiKey: "AIzaSyCAStLtDrEDfpGE2l7kUTAiHsu1md0r9_k",
  authDomain: "i-cannot-think-of-a-name.firebaseapp.com",
  databaseURL: "https://i-cannot-think-of-a-name.firebaseio.com",
  projectId: "i-cannot-think-of-a-name",
  storageBucket: "",
  messagingSenderId: "684268648817",
  appId: "1:684268648817:web:59e10f8909f163ab"
};
firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;

  }

    // Change the HTML to reflect the stored values
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);

    // Print the data to the console.






    // Print the data to the console.


  


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var biderName = $("#bidder-name").val();
  var bidderPrice = $("#bidder-price").val();


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set ({
      highBidder: bidderName,
      
    })

    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});

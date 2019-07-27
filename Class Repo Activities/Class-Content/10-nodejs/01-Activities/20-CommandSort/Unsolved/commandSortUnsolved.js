// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var startingArrary = process.argv
var inputNumbers = []
// console.log(startingArrary);
for (var i = 2; i < startingArrary.length; i ++) {
inputNumbers.push(parseFloat(startingArrary[i]))
}
inputNumbers = inputNumbers.sort()
console.log(inputNumbers)
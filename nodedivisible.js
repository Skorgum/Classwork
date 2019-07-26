console.log(process.argv)
if (process.argv[2] === process.argv[3]) {
    console.log("Parameters Match")
} else {
    console.log("Parameters Do Not Match")
}
if (process.argv[2] % 7 == 0 && process.argv[3] % 7 ==0) {
    console.log(true)
} else {
    console.log(false)
}
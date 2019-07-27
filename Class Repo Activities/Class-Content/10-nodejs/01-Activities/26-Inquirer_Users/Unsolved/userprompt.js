// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: "input",
            message: "Enter your Username",
            name: "username"
        },
        {
            type: "password",
            message: "Enter your password",
            name: "password"
        },
        {
            type: "list",
            message: "Boxers or Briefs?",
            choices: ["Boxers", "Briefs", "Commando"], 
            name: "choice"
        },
        {
            type: "checkbox",
            message: "Select all items that you want",
            choices: ["Pants", "Shirt", "Shoes", "Socks"],
            name: "options"
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        }
    ])
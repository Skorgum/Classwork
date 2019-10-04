import React from "react";
const name = "Cole Rudolph";
const numLetters = 11;
const thought = "is my ticket to a big boy job";
const removeVowels = (name) => {
   return name.replace(/[aeiou]/ig, "") 
}


function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {numLetters} letters</h2>
          <h2>I think React {thought}</h2>
          <h3>Name without vowels:  {removeVowels(name)}</h3>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;

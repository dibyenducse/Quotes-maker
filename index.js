/*
Title: Index
Description: Random Quotes Generator
Author: Dibyendu Mondal
Date:May-15-2023
*/

//Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

//App Object- Module Scaffolding
const app = {};

//Configuration
app.config = {
    timeBetweenQuotes: 1000;
};

//Function That prints a random quotes
app.printAQuote = function printAQuote() {
    //Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();
    //Get the length of the quotes
    const quote = allQuotes.length;
    //random number quotes
    const randomQuotes = mathLibrary.generateRandomNumber(1, quote)
    const finalQuote = allQuotes[randomQuotes - 1]
    console.log(finalQuote)
}


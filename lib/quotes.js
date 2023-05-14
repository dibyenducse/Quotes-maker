/*
Title: quotes making
Description: random Quotes Generator
Author: Dibyendu Mondal
Date:May-15-2023
*/

//Dependecies
const fs = require('fs');

//Quotes Object - Module Scaffolding
const quotes = {};

//Get all the quotes and return them to user
quotes.allQuotes = function allQuotes() {
    const fileContacts = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');
    const arrayOfQuotes = fileContacts.split(/\r?\n/);
    return arrayOfQuotes;
};

//Module Export
module.exports = quotes;

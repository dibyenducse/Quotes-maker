/*
Title: Math Library
Description: Utility library for math releted function
Author: Dibyendu Mondal
Date:May-15-2023
*/

//Math Object- Module Scaffolding
const math = {};

//Get a random integer generator between two integers
math.generateRandomNumber = function (min, max) {
    const minimum = min;
    const maximum = max;
    // Generate a random number between min and max (inclusive)
    const randomNumber =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return randomNumber;
};

//console.log(math.generateRandomNumber(1, 2));

//Export the library
module.exports = math;

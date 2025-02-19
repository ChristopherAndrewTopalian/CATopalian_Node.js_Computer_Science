// push_objects_to_array.js

let people = [];

let jane = {
    name: 'Jane',
    score: 98
};

let tabitha = {
    name: 'Tabitha',
    score: 95
};

people.push(jane);
people.push(tabitha);

console.log(people);

console.log('Press Enter to Exit');

process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

/*
[ { name: 'Jane', score: 98 }, { name: 'Tabitha', score: 95 } ]
Press Enter to Exit
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


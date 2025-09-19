// startBrowser.js

const { exec } = require('child_process');

// URL to open
let url = 'https://www.google.com';

// open URL in default web browser
let command = 'start ' + url;

// execute the command
exec(command);

console.log('Browser opened to: ' +  url);

//----//

process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


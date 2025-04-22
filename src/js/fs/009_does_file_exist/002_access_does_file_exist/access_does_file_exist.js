// access_does_file_exist.js

let fs = require('fs');

fs.access('ourFile.txt', fs.constants.F_OK, function(theError)
{
    if (theError)
    {
        console.log('file does not exist.');
    }
    else
    {
        console.log('file exists.');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


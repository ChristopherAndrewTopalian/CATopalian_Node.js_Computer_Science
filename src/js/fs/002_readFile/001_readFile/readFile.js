// readFile.js

let fs = require('fs');

// read the file we previously wrote
fs.readFile('ourFile.txt', 'utf8', function(error, data)
{
    if (error)
    {
        console.error('Error reading file:', error);
    }
    else
    {
        console.log('File contents:');
        console.log(data);
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


// readFile_if_includes.js

let fs = require('fs');

// read the file we previously wrote
fs.readFile('ourFile.txt', 'utf8', function(error, data)
{
    if (error)
    {
        console.error('error reading file:', error);
    }
    else
    {
        console.log('file contents:');
        console.log(data);

        if (data.toLowerCase().includes('hi'))
        {
            console.log('says hi');
        }
    }
});

//----//

/*
file contents:
Hi. This is our text.
says hi
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


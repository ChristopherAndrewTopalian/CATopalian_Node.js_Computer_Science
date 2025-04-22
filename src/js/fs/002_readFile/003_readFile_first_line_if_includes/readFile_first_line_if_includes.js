// readFile_first_line_if_includes.js

let fs = require('fs');

// read the file and get only the first line
fs.readFile('ourFile.txt', 'utf8', function(error, data)
{
    if (error)
    {
        console.error('error reading file:', error);
    }
    else
    {
        let lines = data.split('\n');

        if (lines.length > 0)
        {
            console.log('first line:');
            console.log(lines[0]);

            if (lines[0].toLowerCase().includes('hi'))
            {
                console.log('First Line Says Hi');
            }
        }
        else
        {
            console.log('file is empty');
        }
    }
});

//---//

/*
first line:
Hi. This is our text.
First Line Says Hi
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


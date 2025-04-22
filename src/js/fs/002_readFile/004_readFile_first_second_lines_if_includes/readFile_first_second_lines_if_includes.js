// readFile_first_second_lines_if_includes.js

let fs = require('fs');

// read file and get first and second lines
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
            console.log('first and second lines:');
            console.log(lines[0] + '\n' + lines[1]);

            if (lines[0].toLowerCase().includes('hi'))
            {
                console.log('First Line Says Hi');
            }

            if (lines[1].toLowerCase().includes('here'))
            {
                console.log('Second Line Says Here');
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
first and second lines:
Hi. This is the first line.
This is the second line here.
First Line Says Hi
Second Line Says Here
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


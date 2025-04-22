// stat_checkFileSize_maxSize.js

let fs = require('fs');

let filePath = 'ourFile.txt';
let maxSize = 25; // size in bytes

function checkFileSize()
{
    fs.stat(filePath, function(theError, stats)
    {
        if (theError)
        {
            console.error('Error reading file stats:', theError);
            return;
        }

        console.log('Current size:', stats.size);

        if (stats.size >= maxSize)
        {
            console.log('File has reached or exceeded', maxSize, 'bytes!');
        }
    });
}

// keep checking every 1000ms (1 second)
setInterval(function()
{
    checkFileSize();
}, 1000);

//----//

/*
Current size: 21
Current size: 21
Current size: 21
Current size: 21
Current size: 45
File has reached or exceeded 25 bytes!
Current size: 45
*/

/*
After we start this script we can type
more data into ourFile.txt and
then press save.
This script will detect the new size
of the file and tell us if the maxSize
has been reached.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


// writeFile_append.js

let fs = require('fs');

fs.writeFile('ourFile.txt', 'Hi. This is our text.\n', { flag: 'a' }, function(theError)
{
    if (theError)
    {
        console.error('error writing file:', theError);
    }
    else
    {
        console.log('file written (appended).');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


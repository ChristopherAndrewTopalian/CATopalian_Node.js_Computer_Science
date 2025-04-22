// rename_file.js

let fs = require('fs');

fs.rename('ourFile.txt', 'renamedFile.txt', function(theError)
{
    if (theError)
    {
        console.error('Error renaming file:', theError);
    }
    else
    {
        console.log('File renamed successfully.');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


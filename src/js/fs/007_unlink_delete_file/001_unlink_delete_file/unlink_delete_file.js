// unlink_delete_file.js

let fs = require('fs');

fs.unlink('ourFile.txt', function(theError)
{
    if (theError)
    {
        console.error('theError deleting file:', theError);
    }
    else
    {
        console.log('file deleted successfully.');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


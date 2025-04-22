// rmdir_remove_directory.js

let fs = require('fs');

fs.rmdir('ourFolder', function(theError)
{
    if (theError)
    {
        console.error('theError deleting folder:', theError);
    }
    else
    {
        console.log('folder deleted successfully.');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


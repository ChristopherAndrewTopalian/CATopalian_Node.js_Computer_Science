// rename_folder.js

let fs = require('fs');

fs.rename('ourFolder', 'newFolderName', function(theError)
{
    if (theError)
    {
        console.error('theError renaming folder:', theError);
    }
    else
    {
        console.log('folder renamed successfully.');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


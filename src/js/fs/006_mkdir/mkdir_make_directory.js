// mkdir_make_directory.js

let fs = require('fs');

fs.mkdir('ourNewFolder', function(theError)
{
    if (theError)
    {
        console.error('Error creating folder:', theError);
    }
    else
    {
        console.log('Folder created successfully.');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


// writeFile.js

let fs = require('fs');

fs.writeFile('ourFile.txt', 'Hi. This is our text.', function(theError)
{
    if (theError)
    {
        console.error('Error writing file:', theError);
    }
    else
    {
        console.log('File written.');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


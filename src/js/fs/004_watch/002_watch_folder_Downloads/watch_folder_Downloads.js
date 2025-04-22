// watch_folder_Downloads.js

let fs = require('fs');
let path = require('path');
let os = require('os');

// get Downloads folder path (cross platform)
let downloadsFolder = path.join(os.homedir(), 'Downloads');

console.log('Watching folder: Downloads:\\');

fs.watch(downloadsFolder, function(eventType, filename)
{
    if (filename)
    {
        console.log('Change detected in: ' + filename);
        console.log('Event type: ' + eventType);
    }
    else
    {
        console.log('Filename not provided');
    }
});

//----//

/*
After we start this script we can add, remove, or change the name of
any file in our Downloads folder
and this script will detect the change
and report what kind of change occurred.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


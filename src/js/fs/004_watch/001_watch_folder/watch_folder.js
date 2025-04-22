// watch_folder.js

let fs = require('fs');
let path = require('path');

let folderToWatch = path.resolve(__dirname);

console.log('Watching folder: ' + folderToWatch);

fs.watch(folderToWatch, function(eventType, filename)
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
Watching folder: Documents:\ourFolder
Change detected in: ourFile.txt
Event type: rename
Change detected in: ourFiles.txt
Event type: rename
*/

/*
After we start this script we can 
change the name of ourFile to ourFiles
and the script will detect the change
and report the new name of the file.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


// stat.js

let fs = require('fs');

// get info about a file
fs.stat('ourFile.txt', function(theError, stats)
{
    console.log(stats.size);
    console.log(stats.isFile());
});

// 21
// true

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


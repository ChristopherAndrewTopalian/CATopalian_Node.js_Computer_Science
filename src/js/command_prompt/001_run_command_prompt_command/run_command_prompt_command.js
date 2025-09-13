// run_command_prompt_command.js

const { exec } = require('child_process');

// execute the date command
exec('cmd /c date /T', function(error, stdout, stderr)
{
    if (error)
    {
        console.error(`Error executing command: ${error}`);
        return;
    }
    if (stderr)
    {
        console.error(`Error: ${stderr}`);
        return;
    }

    // print the output
    console.log(`The current date is: ${stdout.trim()}`);

});

//----//

process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


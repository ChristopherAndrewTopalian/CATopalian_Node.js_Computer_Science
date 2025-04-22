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

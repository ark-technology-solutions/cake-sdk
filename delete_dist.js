const fs = require('fs');
path = './dist'

fs.rm(path, { recursive: true }, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('dist is deleted!');
});
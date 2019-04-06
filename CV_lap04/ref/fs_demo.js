const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, 'test'))) {
    fs.mkdir(path.join(__dirname, 'test'), {}, function (err) {
        if (err) throw err;
        console.log('Folder created ....');
    });
} else {
    console.log('Folder existed ....');
}

// fs.writeFile(path.join(__dirname, 'test', 'contest.txt'),
//     'Hello man, It is a good day to code JavaScript', err => {
//         if (err) throw err;
//         console.log('File created and written ....');
//     }
// );

fs.appendFile(path.join(__dirname, 'test', 'contest.txt'),
    '\n What a wonderful Asynchronous operation.',
    err => {
        if (err) throw err;
        console.log('File appendFile');
    }
);


fs.readFile(path.join(__dirname, 'test', 'contest.txt'),
    'utf8',
    (err,data) =>{
        if(err) throw err;
        console.log(data);
    }
);

fs.rename(path.join(__dirname, 'test', 'contest.txt'),path.join(__dirname, 'test', 'data.txt'),err => {
    if(err) throw err;
    console.log('File renamed ....');
})
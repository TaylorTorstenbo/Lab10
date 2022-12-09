import { reduce } from 'module'
const require = createRequire(import.meta.url);

import reduce from 'async/reduce';

const fileList = ['file1.txt', 'file2.txt', 'file3.txt'];
const withMissingFileList = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];

// asynchronous function that computes the file size in bytes
// file size is added to the memoized value, then returned
function getFileSizeInBytes(memo, file, callback) {
    fs.stat(file, function (err, stat) {
        if (err) {
            return callback(err);
        }
        callback(null, memo + stat.size);
    });
}

// Using callbacks
async.reduce(fileList, 0, getFileSizeInBytes, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        // 6000
        // which is the sum of the file sizes of the three files
    }
});

const path = require('path');

module.exports = {
    entry: './test/data/song.js',
    output: {
        path: __dirname,
        filename: "bundle.test.js"
    },
    mode: "none"
};
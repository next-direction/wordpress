const glob = require('glob');
const path = require('node:path');
const url = require('url');
const { fileURLToPath } = require('node:url');

module.exports = {
    mode: 'development',
    entry: Object.fromEntries(
        glob.sync('src/js/**/index.js').map(file => [
            path.relative('src', file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, url.pathToFileURL(__filename).toString())),
        ]),
    ),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'web/app/themes/ndblog/assets'),
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
};
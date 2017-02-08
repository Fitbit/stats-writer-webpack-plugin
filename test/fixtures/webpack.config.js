import {
    join
} from 'path';

export default {
    entry: 'index.js',
    resolve: {
        modules: [
            __dirname
        ]
    },
    output: {
        filename: 'bundle.js',
        path: join(__dirname, 'tmp', '[hash]')
    },
    plugins: []
};

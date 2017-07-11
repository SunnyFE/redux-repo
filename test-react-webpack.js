const path = require('path')
const cwd = process.cwd()

module.exports = {
    devtool: '#cheap-source-map',
    watch: true,
    entry: {
        'index': [path.resolve(cwd, 'testReact/public/webresources/controllers/index')]
    },
    output: {
        filename: '[name].js?[hash]',
        path: path.resolve(cwd, './testReact/public/dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [{
            test: /\.js|\.jsx$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react", "es2015"]
                    }
                }
            ],

        }]
    },
    plugins: []
}
const path = require('path')
const cwd = process.cwd()
const publicPath = 'testReact/public'
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const webpackConfig = {
    devtool: '#cheap-source-map',
    watch: true,
    // stats:"errors-only",
    entry: {
        'index': [
            path.resolve(cwd, 'testReact/public/webresources/controllers/index'),
            "webpack-dev-server/client?http://localhost:8088/",
            "webpack/hot/dev-server"
        ]
    },
    output: {
        filename: '[name].js?[hash]',
        path: path.resolve(cwd, './testReact/public/dist'),
        publicPath: '/'
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

const compiler = webpack(webpackConfig)

const server = new WebpackDevServer(compiler,
    {
        contentBase: path.join(__dirname, publicPath),
        historyApiFallback: true,
        hot: true
    }
)

server.listen('8088','localhost',function(err){
    console.log(err)
})
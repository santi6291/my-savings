const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: 'app.css'
})

function sassRules() {
    return [{
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    }]
}

function scriptRules() {
    return [{
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: { presets: ['env'] }
    }]
}

module.exports = {
    entry: [
        './resources/assets/scss/app.scss',
        './resources/assets/js/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    module: {
        rules: sassRules().concat(scriptRules())
    },
    plugins: [
        extractSass
    ]
}

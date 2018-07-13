const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");


module.exports={
    watch:true,
    mode:'development',
    entry:'./public/scripts/main.js',
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'main.bundle.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        },{
            test:/\.css$/,
            use:["style-loader", 'css-loader']
        }]},
        plugins:[
            new HtmlWebpackPlugin({template:'./public/index.html'}),
            new ExtractCssChunks({
                path:path.resolve(__dirname,'./build'),
                filename:'style.css',
                hot:true
            }),
            new webpack.HotModuleReplacementPlugin()
        ]

};
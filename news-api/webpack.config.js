const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const isDev = process.env.NODE_ENV === 'development';
const isDev = true;

const devServer = () =>
    !isDev
        ? {}
        : {
            devServer: {
                open: true,
                hot: false,
                port: 8081,
                // static: {
                //     directory: path.join(__dirname, 'public'),
                // },
            },
        };

module.exports = ({ develop }) => ({
    mode: develop ? 'development' : 'production',
    entry: {
        app_: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.[tj]s?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Demo webpack'
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        // new CopyPlugin({
        //     patterns: [{ from: './public' }],
        // }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    devtool: 'inline-source-map',
    ...devServer(develop),
});

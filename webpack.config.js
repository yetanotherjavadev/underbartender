const webpack = require('webpack');
const path = require('path');

// constiables
const SOURCE_PATH = path.join(__dirname, './src');
const OUT_PATH = path.join(__dirname, './dist');

// plugins
// const Copy = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const NODE_MODE = process.env.NODE_ENV || 'development';
const IS_PROD = NODE_MODE === 'production';

console.log('process.env.NODE_ENV: ' + NODE_MODE);

module.exports = {
	context: SOURCE_PATH,
	entry: {
		app: './index.tsx'
	},
	output: {
		path: OUT_PATH,
		filename: 'bundle.js',
		chunkFilename: '[chunkhash].js',
		publicPath: '/'
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		// Fix webpack's default behavior to not load packages with jsnext:main module
		// (jsnext:main directs not usually distributable es6 format, but es6 sources)
		mainFields: ['module', 'browser', 'main'],
		alias: {
			app: path.resolve(__dirname, 'src/app/')
		}
	},
	devtool: IS_PROD ? 'nosources-source-map' : 'eval-source-map',
	module: {
		rules: [
			// .ts, .tsx
			{
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				loader: 'ts-loader'
			},
			// scss
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!sass-loader'
				})
			},
			// static assets
			{
				test: /\.html$/,
				use: 'html-loader'
			}, {
				test: /\.(png|svg)$/,
				use: 'url-loader?limit=10000'
			}, {
				test: /\.(jpg|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				loader: "file-loader"
			}
		]
	},
	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					priority: -10
				}
			}
		},
		runtimeChunk: true
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: JSON.stringify(NODE_MODE),
			DEBUG: false
		}),
		new WebpackCleanupPlugin(),
		// new Copy([
		// 	{ from: './node_modules/bootstrap-sass/assets/fonts', to: 'fonts' }
		// ]),
		new ExtractTextPlugin({
			filename: 'styles.css',
			allChunks: true
			// disable: !isProduction
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	],
	devServer: {
		contentBase: SOURCE_PATH,
		hot: true,
		inline: true,
		historyApiFallback: {
			disableDotRule: true
		},
		stats: 'minimal'
	},
	node: {
		// workaround for webpack-dev-server issue
		// https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
		fs: 'empty',
		net: 'empty'
	}
};
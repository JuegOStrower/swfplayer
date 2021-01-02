const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'main.js',
		publicPath:''
	},
	module: {
		rules: [
			{
				test: /\.(png|swf)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}, {
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}, {
						loader: 'extract-loader'
					}, {
						loader: 'html-loader',
						options: {
							minimize: {
								collapseWhitespace: true,
								removeComments: true,
								removeRedundantAttributes: true,
								removeScriptTypeAttributes: true,
								removeStyleLinkTypeAttributes: true,
								useShortDoctype: true,
								collapseBooleanAttributes: true,
								minifyCSS: true,
								minifyJS: true,
								sortAttributes: true,
								sortClassName: true
							},
							attributes: {
								list: [
									'...',
									{ tag: 'link', attribute: 'href', type: 'src', }
								]
							}
						}
					}
				],
			},
		]
	},
	plugins: [new CleanWebpackPlugin()],
	optimization: {
		minimize: true
	}
};
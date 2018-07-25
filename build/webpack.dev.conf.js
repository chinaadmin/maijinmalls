var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

 const express = require('express')
 const app = express()
 var appDataDemo = require('./json/demo.json') //加载本地数据文件
 var demo = appDataDemo //获取对应的本地数据
 var apiRoutes = express.Router()
 app.use('/simulateApi', apiRoutes)


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
//	 loaders: [{
//	 	test: /\.(png|jpg|jpeg|gif|woff)$/,
//	 	loader: 'url?limit=4192&name=[path][name].[ext]' 
//	 }],
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  devServer: {
		//本地模拟数据
		before(app) {
			app.get('/simulateApi/demo', (req, res) => {
					res.json({
						errno: 0,
						data: demo
					}) //接口返回json数据，上面配置的数据seller就赋值给data请求后调用
				}),
				app.get('/api/goods', (req, res) => {
					res.json({
						errno: 0,
						data: goods
					})
				}),
				app.get('/api/ratings', (req, res) => {
					res.json({
						errno: 0,
						data: ratings
					})
				})
		},
		//本地模拟数据 end
	
	},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})

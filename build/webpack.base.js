const path=require('path')
// 引入vue-loader的插件
const VueLoaderPlugin=require('vue-loader/lib/plugin')
//引入html-webpack-plugin
const HtmlWebpackPlugin=require('html-webpack-plugin')
// 引入clean-webpack-plugin
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
//引入webpack插件
const webpack=require('webpack')

module.exports={
	//打包入口, 告诉webpack从那个文件开始打包
	entry:'./src/main.js',
	// 打包出口，生成到哪里
	output:{
		filename:'main.js',
		path:path.resolve(__dirname,'../dist')
	},
	// 打包规则
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel-loader"
			},
			{
			test:/\.vue$/,
			loader:'vue-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				options:{
					name:'[name].[ext]',
					limit:2048
				}
			},
			{
				test: /\.css$/,
				use:['vue-style-loader','css-loader','postcss-loader']
			},
			{
				test: /\.scss$/,
				use:['style-loader','css-loader','sass-loader','postcss-loader','stylus-loader']
			}
		]
	},
	// 插件配置
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template:'./index.html'
		}),
		new CleanWebpackPlugin(),
	],
	resolve:{
		alias:{
			'vue':'vue/dist/vue.js',
			'@':path.resolve(__dirname,'../src'),
			'css':path.resolve(__dirname,'../src/assets/css')
		}
	}
}
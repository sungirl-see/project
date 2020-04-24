const baseConfig=require('./webpack.base.js')
const merge=require('webpack-merge')
//引入webpack插件
const webpack=require('webpack')

const devConfig={
	devServer:{
		contentBase:'./dist',
		open:true,
		hot:true
	},
	 mode: 'development',
	// 插件配置
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
}

module.exports=merge(baseConfig,devConfig)
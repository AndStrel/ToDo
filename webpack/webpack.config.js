const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack');

module.exports = (envVars) => {
	const { env } = envVars //переменную env мы будем передавать при запуске скрипта со значением dev или prod
	const envConfig = require(`./webpack.${env}.js`)
	const config = merge(commonConfig, envConfig, {
		plugins: [
			new Dotenv()
		]
	})
	return config
}

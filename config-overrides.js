const { override, addDecoratorsLegacy, addWebpackAlias, addBabelPreset, fixBabelImports } = require('customize-cra')
const path = require('path')

module.exports = override(
	addDecoratorsLegacy(), // 配置装饰器
	addWebpackAlias({
		'@': path.resolve(__dirname, 'src')
	}),
	addBabelPreset([
		'@babel/preset-env',
		{
			targets: {
				chrome: '49',
				ios: '10'
			},
			loose: true
		}
	]),
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		libraryDirectory: 'es/components',
		style: false
	}),
	(config) => {
		if (config.mode === 'production') {
			config.output.publicPath = './'
		}
		return config
	}
)

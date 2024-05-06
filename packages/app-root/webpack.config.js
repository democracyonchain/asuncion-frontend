const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const impMaps = require('@bsc/import-maps/package.json');
const path = require("path");
const debug = require("debug")("root-app");

module.exports = (webpackConfigEnv, argv) => {
	const orgName = "bsc";
	const isLocal = webpackConfigEnv && webpackConfigEnv.isLocal;  

	const defaultConfig = singleSpaDefaults({
		orgName,
		projectName: "root-config",
		webpackConfigEnv,
		argv,
		disableHtmlGeneration: true,
	});
	
	const final = {
		...defaultConfig,
		devServer: {
		...defaultConfig.devServer,
		https: Boolean(process.env.HTTPS),
		},
		output: {
		...{
			path: path.resolve(__dirname, 'dist'), 
			filename: 'bsc-root-config.js?V='+process.env.npm_package_version,
			devtoolNamespace:'root-config', 
			uniqueName: 'root-config',
			libraryTarget: 'system'
		}
		},
		plugins: [
		...defaultConfig.plugins,
		new HtmlWebpackPlugin({
			inject: false,

			filename: isLocal ? "index.html" : "index.html",
			//environmentUrl:dotenv.parsed.URLHOME,
			environment: process.env.NODE_ENV,
			template: "src/index.ejs",
			templateParameters: {
			isLocal,
			orgName,
			FEATURE_APP_DATA: process.env.FEATURE_APP_DATA,
			impMaps_version:impMaps.version
			},
		}),
		],
		stats: "errors-warnings",
	};
	debug(final);

	return final;
};

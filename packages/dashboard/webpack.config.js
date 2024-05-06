const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bsc",
    projectName: "dashboard",
    webpackConfigEnv,
    argv,
  });

  	return merge(defaultConfig, {
		resolve: {
			extensions: [".ts", ".d.ts", ".tsx", ".js",".jsx"],
			preferRelative: true,
			plugins: [new TsconfigPathsPlugin()],
		},
		devServer: {
			port: 9002,
			https: Boolean(process.env.HTTPS),
		},
		externals: [/^@bsc\//],
		output: {
		path: path.resolve(__dirname, 'dist'),
			filename: "main.js?V="+process.env.npm_package_version
		}     
	});
};

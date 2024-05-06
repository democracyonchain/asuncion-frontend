const { merge } = require("webpack-merge");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

let ambiente='';

if(process.env.NODE_ENV === 'test'){
	ambiente='AMBIENTE DE PRUEBAS'
}else if(process.env.NODE_ENV == 'local'){
	ambiente='AMBIENTE LOCAL'
}else if(process.env.NODE_ENV == 'dev'){
	ambiente='AMBIENTE DESARROLLO'
}

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "bsc",
		projectName: "home",
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
			port: 9004,
			https: Boolean(process.env.HTTPS),
		},
		externals: [/^@bsc\//],
		output: {
      path: path.resolve(__dirname, 'dist'),
        filename: "main.js?V="+process.env.npm_package_version
      },
      plugins: [  
        new webpack.DefinePlugin({
			process:{ 
            	'NODE_ENV': JSON.stringify(process.env.NODE_ENV),	
            	'AMBIENTE': JSON.stringify(ambiente)			 
          		}
        	})
        ]
	});
};


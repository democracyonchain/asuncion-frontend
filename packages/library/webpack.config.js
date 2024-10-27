const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

let dotenv = require('dotenv').config({ path: __dirname + '/.envLocal' });

if(process.env.NODE_ENV === 'test'){
   dotenv = require('dotenv').config({ path: __dirname + '/.envTest' });
}else if(process.env.NODE_ENV == 'prod'){
   dotenv = require('dotenv').config({ path: __dirname + '/.envProd' });
}else if(process.env.NODE_ENV == 'dev'){
  dotenv = require('dotenv').config({ path: __dirname + '/.envDev' });
}

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "bsc",
		projectName: "library",
		webpackConfigEnv,
		argv,
		module: {
			rules: {
			  test: "match",
			  use: "replace",
			},
		  },
	});

	return merge(defaultConfig, {
		resolve: {
			extensions: [".ts", ".d.ts", ".tsx", ".js",".jsx"],
			preferRelative: true,
			plugins: [new TsconfigPathsPlugin()],
		},
		devServer: {
			port: 9001,
			https: Boolean(process.env.HTTPS),
		},
		externals: [/^@bsc\//],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',      
		 },
		 plugins: [
		  new webpack.DefinePlugin({
		    	process:{
					'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
					'URLCONEXIONGRAPQL': JSON.stringify(dotenv.parsed.URLCONEXIONGRAPQL),					
					'URLHOME': JSON.stringify(dotenv.parsed.URLHOME),					
					'FRONT_ETIQUETA': JSON.stringify(dotenv.parsed.FRONT_ETIQUETA),					
		    	}
		  	})
		],
		performance: {
			hints: process.env.NODE_ENV === 'production' ? "warning" : false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000
		  },
		optimization: {
			splitChunks: { 
				chunks: 'all', 
				name: 'main', 
			}
		},
		module: {
			rules: [  
			{
				test: /\.(sass|scss|woff|eot|svg|ttf|woff2|less|otf|png)$/,
				type: 'asset/resource',          
			},
		
		  ]
		},
	});
};

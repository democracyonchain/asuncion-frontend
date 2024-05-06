const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "bsc",
		projectName: "library",
		webpackConfigEnv,
		argv,
		module: {
			rules: {
			  //test: "match",
			  //use: "replace",
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
		  // new webpack.DefinePlugin({
		  //   process:{
		  //       'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		  //       'URLCONEXIONGRAPQL': JSON.stringify(dotenv.parsed.URLCONEXIONGRAPQL),
		  //       'URLKEYCLOACK': JSON.stringify(dotenv.parsed.URLKEYCLOACK),
		  //       'REALMKEYCLOACK': JSON.stringify(dotenv.parsed.REALMKEYCLOACK),
		  //       'CLIENTCLOACK': JSON.stringify(dotenv.parsed.CLIENTCLOACK),
		  //       'URLHOME': JSON.stringify(dotenv.parsed.URLHOME),
		  //       'CLIENT_KEYCLOACK_ROL': JSON.stringify(dotenv.parsed.CLIENT_KEYCLOACK_ROL),
		  //       'FRONT_ETIQUETA': JSON.stringify(dotenv.parsed.FRONT_ETIQUETA),
		  //       'API_MEF_ESBYE': JSON.stringify(dotenv.parsed.API_MEF_ESBYE),
		  //   }
		  // })
		],
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

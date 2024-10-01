const fs = require('fs');
const seguridades = require('@bsc/seguridades/package.json');
const library = require('@bsc/library/package.json');
const root = require('@bsc/root-config/package.json');
const procesos = require('@bsc/procesos/package.json');


fs.writeFileSync('./packages/import-maps/importmap.'+process.env.NODE_ENV+'.json',
  	JSON.stringify(
		{
			"imports": {
				"@bsc/root-config": "http://localhost/bsc-root-config.js?V="+root.version,
				"@bsc/seguridades": "http://localhost/@bsc/seguridades/"+seguridades.version+"/main.js?V="+seguridades.version,
				"@bsc/library": "http://localhost/@bsc/library/"+library.version+"/main.js?V="+library.version,
				"@bsc/procesos": "http://localhost/@bsc/procesos/"+procesos.version+"/main.js?V="+procesos.version,
  			}
		}
		,null, 4)
	);


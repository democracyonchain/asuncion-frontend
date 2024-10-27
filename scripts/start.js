#!/usr/bin/env node
const { spawn } = require('node:child_process');
const prompts = require("prompts");
const pidTree = require("pidtree");

const portMaps = {
  seguridades: 9003,
  home: 9004,
  procesos: 9005,
};

(async () => {
  const { featureApps } = await prompts([
    {
      type: "multiselect",
      name: "featureApps",
      message: "Selecciona con la barra espaciadora la(s) aplicación(es) para trabajar",
      instructions: false,
      choices: Object.entries(portMaps).map(([appName, portNumber]) => ({
        title: `${appName} (Port ${portNumber})`,
        value: appName,
      })),
    },
  ]);

  if (!featureApps.length) {
    console.log("🚨 No se seleccionaron aplicaciones");
    process.exit();
  }

  if (!process.env.HTTPS) {
    console.log("Escuchando el server: http://localhost:9000/");
  }

  const startProcess = spawn( /^win/.test(process.platform) ? 'lerna.cmd' :
    "lerna",
    [
      "run",
      "start",
      "--scope",
      `'*/{root-config,library,${featureApps.join(",")}}'`,
      "--stream",
      "--parallel",
    ],
    {
      stdio: "inherit",
      env: {
        ...process.env,
        FEATURE_APP_DATA: JSON.stringify(
          featureApps.reduce((result, currFeatureApp) => {
            result[currFeatureApp] = portMaps[currFeatureApp];
            return result;
          }, {})
        ),
      },
    }
  );

  setTimeout(async () => {
    const ids = await pidTree(startProcess.pid);
    process.on("SIGINT", async () => {
      spawn("kill", ["-9"].concat(ids));
    });
  }, 2000);
})();
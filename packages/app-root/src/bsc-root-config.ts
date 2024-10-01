import { registerApplication, start } from "single-spa";
import {
	constructApplications,
	constructRoutes,
	constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

/**
 * Objeto que contiene configuraciones de carga.
 * 
 * @property {Object} loaders - Contiene los elementos de carga.
 * @property {string} loaders.loading - HTML para el indicador de carga.
 * @property {string} loaders.settings - Configuraciones adicionales (actualmente vacío).
 */
const data:any = {
  loaders: {
    loading: `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
    settings:''
  }
}


/**
 * Construye las rutas utilizando el diseño de microfrontend y los datos proporcionados.
 *
 * @constant {any} routes - Las rutas construidas a partir del diseño de microfrontend y los datos.
 */
const routes = constructRoutes(microfrontendLayout,data);

/**
 * Construye las aplicaciones utilizando las rutas proporcionadas y una función para cargar las aplicaciones.
 * 
 * @constant
 * @name applications
 * @type {Array}
 * 
 * @param {Object} config - Configuración para construir las aplicaciones.
 * @param {Array} config.routes - Rutas que se utilizarán para construir las aplicaciones.
 * @param {Function} config.loadApp - Función que se utiliza para cargar una aplicación específica.
 * @param {Object} config.loadApp.name - Nombre de la aplicación que se va a cargar.
 * 
 * @returns {Promise} - Promesa que se resuelve cuando la aplicación se ha cargado correctamente.
 */
const applications = constructApplications({
	routes,
		loadApp({ name }) {
		return System.import(name);
	},
});

/**
 * @constant {Object} layoutEngine - Motor de diseño que se construye utilizando las rutas y aplicaciones proporcionadas.
 * 
 * Este motor de diseño se encarga de gestionar la disposición y organización de las diferentes aplicaciones y rutas
 * dentro de la aplicación principal. Utiliza la función `constructLayoutEngine` para crear una instancia del motor
 * de diseño con las configuraciones especificadas.
 * 
 * @see constructLayoutEngine
 */
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

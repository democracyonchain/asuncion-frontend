import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

/**
 * Configuración de los ciclos de vida para una aplicación microfrontend utilizando single-spa-react.
 * 
 * @constant
 * @type {Object}
 * @property {React} React - La librería React.
 * @property {ReactDOM} ReactDOM - La librería ReactDOM.
 * @property {React.ComponentType} rootComponent - El componente raíz de la aplicación.
 * @property {Function} errorBoundary - Función para personalizar el límite de error raíz para el microfrontend.
 * @param {Error} err - El error que ocurrió.
 * @param {Object} info - Información adicional sobre el error.
 * @param {Object} props - Las propiedades del componente.
 * @returns {null} - Retorna null para indicar que no se ha personalizado el límite de error.
 */
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props):any {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

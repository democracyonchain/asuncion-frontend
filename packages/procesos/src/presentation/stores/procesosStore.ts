import { configureStore } from '@reduxjs/toolkit';
import { procesosSlice} from '@presentation/actions';


/**
 * Configura y exporta la tienda de Redux para la aplicación.
 * 
 * La tienda se configura con un único reductor `procesos` que proviene de `procesosSlice`.
 * 
 * @constant
 * @type {Store}
 * 
 * @property {Object} reducer - Objeto que contiene los reductores de la tienda.
 * @property {Function} reducer.procesos - Reductor para el estado de `procesos`.
 * 
 * @property {Function} middleware - Función que configura los middlewares de la tienda.
 * @param {Function} getDefaultMiddleware - Función que obtiene los middlewares por defecto.
 * @returns {Array} - Array de middlewares configurados, con la verificación de serialización desactivada.
 */
export const store = configureStore(
	{

		reducer: {			
			procesos:procesosSlice.reducer,		
		},

		middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
	}
)

/**
 * Tipo que representa el estado raíz de la tienda.
 * 
 * Este tipo se obtiene utilizando el tipo de retorno de la función `getState` del objeto `store`.
 * 
 * @typedef {ReturnType<typeof store.getState>} RootState
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * Tipo que representa el despacho de acciones en la aplicación.
 * 
 * Este tipo se deriva del método `dispatch` del objeto `store`, 
 * lo que permite despachar acciones dentro de la aplicación.
 * 
 * @typedef {typeof store.dispatch} AppDispatch
 */
export type AppDispatch = typeof store.dispatch
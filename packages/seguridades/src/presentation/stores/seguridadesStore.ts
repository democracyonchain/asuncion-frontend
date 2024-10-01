import { configureStore } from '@reduxjs/toolkit';
import { seguridadesSlice} from '@presentation/actions';


/**
 * Configura y exporta la tienda de Redux para el módulo de seguridades.
 * 
 * @remarks
 * Esta tienda utiliza `configureStore` de Redux Toolkit para configurar el estado global de la aplicación.
 * 
 * @property {Object} reducer - Objeto que contiene los reducers de la tienda.
 * @property {Function} reducer.seguridades - Reducer para el slice de seguridades.
 * 
 * @property {Function} middleware - Función que configura los middlewares de la tienda.
 * @param {Function} getDefaultMiddleware - Función que obtiene los middlewares por defecto de Redux Toolkit.
 * @param {Object} options - Opciones para la configuración de los middlewares.
 * @param {boolean} options.serializableCheck - Desactiva la verificación de serialización para mejorar el rendimiento.
 */
export const store = configureStore(
	{

		reducer: {			
			seguridades:seguridadesSlice.reducer,		
		},

		middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
	}
)

/**
 * Tipo que representa el estado raíz de la tienda.
 * 
 * @typedef {ReturnType<typeof store.getState>} RootState
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * Tipo que representa el despachador de acciones de la aplicación.
 * 
 * Este tipo se deriva del método `dispatch` del objeto `store`.
 * 
 * @typedef {typeof store.dispatch} AppDispatch
 */
export type AppDispatch = typeof store.dispatch
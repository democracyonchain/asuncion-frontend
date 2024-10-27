import Layout,{Utils404} from "@bsc/library";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { HomeActas, HomeProcesos, HomeDigitacion} from "@presentation/views/";
import { Provider } from 'react-redux';
import { store } from '@presentation/stores';


/**
 * Componente principal de la aplicación de procesos.
 * 
 * Este componente configura las rutas y el enrutamiento de la aplicación utilizando `BrowserRouter`.
 * 
 * @returns {JSX.Element} El componente principal de la aplicación.
 * 
 * @component
 * 
 * @example
 * // Uso del componente Root
 * <Root />
 * 
 * @remarks
 * Este componente envuelve las rutas dentro de un `Provider` de Redux para proporcionar el estado global a la aplicación.
 * 
 * @see {@link BrowserRouter}
 * @see {@link Layout}
 * @see {@link Provider}
 * @see {@link Routes}
 * @see {@link Route}
 * @see {@link Utils404}
 * @see {@link HomeActas}
 * @see {@link HomeProcesos}
 * @see {@link HomeDigitacion}
 */
export default function Root() {

	return (
		<BrowserRouter>  
			<Layout path={'procesos'}>
				<Provider store={store}>
					<Routes>
						<Route path="*" element={<Utils404 path={'procesos'}></Utils404>} />
						<Route path="app/procesos/actas/*"  element={<HomeActas/>}/> 
            			<Route path="app/procesos/home"  element={<HomeProcesos/>}/>  
						<Route path="app/procesos/digitacion/*"  element={<HomeDigitacion/>}/>  						
					</Routes>
				</Provider>
			</Layout>
		</BrowserRouter>	
	)
}

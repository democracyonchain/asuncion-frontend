import Layout,{Utils404} from "@bsc/library";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { HomeMenu,HomeModulos,HomeRol,HomeUsuario } from "@presentation/views/";
import { Provider } from 'react-redux';
import { store } from '@presentation/stores';

/**
 * Componente principal de la aplicación de seguridades.
 * 
 * Este componente configura las rutas y el proveedor de estado global para la aplicación.
 * Utiliza `BrowserRouter` para manejar la navegación del lado del cliente.
 * 
 * @returns {JSX.Element} El componente `Root`.
 * 
 * Rutas configuradas:
 * - `*`: Muestra el componente `Utils404` para rutas no encontradas.
 * - `app/seguridades/menu/*`: Muestra el componente `HomeMenu`.
 * - `app/seguridades/rol/*`: Muestra el componente `HomeRol`.
 * - `app/seguridades/modulos/*`: Muestra el componente `HomeModulos`.
 * - `app/seguridades/usuarios/*`: Muestra el componente `HomeUsuario`.
 * - `app/seguridades/home`: Muestra un `div` con un encabezado `Home`.
 */
export default function Root() {

	return (
		<BrowserRouter>  
			<Layout path={'seguridades'}>
				<Provider store={store}>
					<Routes>
						<Route path="*" element={<Utils404 path={'seguridades'}></Utils404>} />
						<Route path="app/seguridades/menu/*"  element={<HomeMenu/>}/>  
						<Route path="app/seguridades/rol/*"  element={<HomeRol/>}/>  
						<Route path="app/seguridades/modulos/*"  element={<HomeModulos/>}/>				
						<Route path="app/seguridades/usuarios/*"  element={<HomeUsuario/>}/>
						<Route path="app/seguridades/home"  element={<div><h3>Home</h3></div>}/>  
					</Routes>
				</Provider>
			</Layout>
		</BrowserRouter>	
	)
}

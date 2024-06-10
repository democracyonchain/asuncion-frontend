import Layout,{Utils404} from "@bsc/library";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { HomeMenu,HomeModulos,HomeRol,HomeUsuario } from "@presentation/views/";
import { Provider } from 'react-redux';
import { store } from '@presentation/stores';

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
						<Route path="app/seguridades/home"  element={<><h3>Home</h3></>}/>  
					</Routes>
				</Provider>
			</Layout>
		</BrowserRouter>	
	)
}

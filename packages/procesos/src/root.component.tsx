import Layout,{Utils404} from "@bsc/library";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { HomeActas, HomeProcesos} from "@presentation/views/";
import { Provider } from 'react-redux';
import { store } from '@presentation/stores';


export default function Root() {

	return (
		<BrowserRouter>  
			<Layout path={'procesos'}>
				<Provider store={store}>
					<Routes>
						<Route path="*" element={<Utils404 path={'procesos'}></Utils404>} />
						<Route path="app/procesos/actas/*"  element={<HomeActas/>}/> 
            <Route path="app/procesos/home"  element={<HomeProcesos/>}/>   						
					</Routes>
				</Provider>
			</Layout>
		</BrowserRouter>	
	)
}

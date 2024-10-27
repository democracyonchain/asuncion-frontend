import Layout,{Utils404} from "@bsc/library";
import { Routes, Route,BrowserRouter } from "react-router-dom";

export default function Root(props:any) {
    return (
        <BrowserRouter>  
			<Layout path={'home'}>
				<Routes>
				<Route path="*" element={<Utils404 path={'home'}></Utils404>} />
				{/* <Route path="app/seguridades/catalogos"  element={<><h3>Catalogos</h3></>}/>  
				<Route path="app/seguridades/modulo"  element={<><h3>Modulos</h3></>}/>
				<Route path="app/seguridades/usuarios"  element={<><h3>Usuarios</h3></>}/>   */}
				</Routes>
			</Layout>
		</BrowserRouter>	
    )
}

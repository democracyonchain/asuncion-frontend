import { BrowserRouter } from "react-router-dom";
import { store } from '@store/store';
import { Provider } from 'react-redux';
import LayoutGeneral from "@components/layout/LayoutGeneral";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

        
const Layout = ({ children,path}: { children:  JSX.Element | JSX.Element[],path:string})=>{
   
    return ( 
        <>           
            <PrimeReactProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <LayoutGeneral children={children} path={path} /> 
                    </BrowserRouter>
                </Provider> 
            </PrimeReactProvider>       
        </>
    )
}

export default Layout;
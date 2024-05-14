import { BrowserRouter } from "react-router-dom";
import { store } from '@store/store';
import { Provider } from 'react-redux';
import LayoutGeneral from "@components/layout/LayoutGeneral";
import { PrimeReactProvider } from 'primereact/api';
import { ApolloProvider } from '@apollo/client';
import { graphqlClient } from '@infrastructure/client/graphql-client'
import "primereact/resources/themes/lara-light-teal/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

        
const Layout = ({ children,path}: { children:  JSX.Element | JSX.Element[],path:string})=>{
   
    return ( 
        <>      
            <ApolloProvider client={graphqlClient}>     
                <PrimeReactProvider>
                    <Provider store={store}>
                        <BrowserRouter>
                            <LayoutGeneral children={children} path={path} /> 
                        </BrowserRouter>
                    </Provider> 
                </PrimeReactProvider>   
            </ApolloProvider>    
        </>
    )
}

export default Layout;

export  * as graphql from "@infrastructure/graphql/__generated__/graphql-types";

export { Utils404 } from '@components/partials/Utils'
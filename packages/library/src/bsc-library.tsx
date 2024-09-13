import { BrowserRouter } from "react-router-dom";
import { store } from '@store/store';
import { Provider } from 'react-redux';
import LayoutGeneral from "@components/layout/LayoutGeneral";
import { PrimeReactProvider } from 'primereact/api';
import { ApolloProvider } from '@apollo/client';
import { graphqlClient } from '@infrastructure/client/graphql-client'
import "primereact/resources/themes/lara-light-blue/theme.css";
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

export { Utils404, UtilsAccordion,UtilsTabs,UtilsCard,UtilsPanel,
         UtilsConfirm,UtilsModal,UtilsSpinner,UtilsButton,UtilsFieldset,UtilsMessages } from '@components/partials/Utils';
export { UtilsCoreToolbar,UtilsCoreTabMenu,UtilsCoreDataTable } from '@components/partials/UtilsCore';
export { coreAccesosBsc } from '@components/service/authservice';
export { FormCore } from '@components/forms/FormLayout';
export {
    TextInput,CheckBoxInput,EditorInput,InputGroup,MultiSelectInput,SelectInput
} from "@components/forms/FormInput"
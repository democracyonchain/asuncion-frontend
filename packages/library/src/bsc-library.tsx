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

        
/**
 * Layout component that wraps its children with several providers and a router.
 *
 * @param {Object} props - The properties object.
 * @param {JSX.Element | JSX.Element[]} props.children - The child elements to be rendered within the layout.
 * @param {string} props.path - The path string to be passed to the LayoutGeneral component.
 *
 * @returns {JSX.Element} The rendered layout component with all providers and router.
 */
const Layout = ({ children,path}: { children:  JSX.Element | JSX.Element[],path:string})=>{
   
    return ( 
        <div>      
            <ApolloProvider client={graphqlClient}>     
                <PrimeReactProvider>
                    <Provider store={store}>
                        <BrowserRouter>
                            <LayoutGeneral children={children} path={path} /> 
                        </BrowserRouter>
                    </Provider> 
                </PrimeReactProvider>   
            </ApolloProvider>    
        </div>
    )
}

export default Layout;

/**
 * Re-exports all exports from the `@infrastructure/graphql/__generated__/graphql-types` module
 * under the namespace `graphql`.
 *
 * @module
 */
export  * as graphql from "@infrastructure/graphql/__generated__/graphql-types";

/**
 * Exports various utility components from the '@components/partials/Utils' module.
 *
 * @module bsc-library
 * @exports Utils404 - Utility component for handling 404 errors.
 * @exports UtilsAccordion - Utility component for creating accordions.
 * @exports UtilsTabs - Utility component for creating tabbed interfaces.
 * @exports UtilsCard - Utility component for creating card layouts.
 * @exports UtilsPanel - Utility component for creating panels.
 * @exports UtilsConfirm - Utility component for confirmation dialogs.
 * @exports UtilsModal - Utility component for creating modal dialogs.
 * @exports UtilsSpinner - Utility component for displaying spinners.
 * @exports UtilsButton - Utility component for creating buttons.
 * @exports UtilsFieldset - Utility component for creating fieldsets.
 * @exports UtilsMessages - Utility component for displaying messages.
 */
export { Utils404, UtilsAccordion,UtilsTabs,UtilsCard,UtilsPanel,
         UtilsConfirm,UtilsModal,UtilsSpinner,UtilsButton,UtilsFieldset,UtilsMessages } from '@components/partials/Utils';


/**
 * Exports the following components from the UtilsCore module:
 * - `UtilsCoreToolbar`: A toolbar component for core utilities.
 * - `UtilsCoreTabMenu`: A tab menu component for core utilities.
 * - `UtilsCoreDataTable`: A data table component for core utilities.
 *
 * These components are imported from the `@components/partials/UtilsCore` module.
 */
export { UtilsCoreToolbar,UtilsCoreTabMenu,UtilsCoreDataTable } from '@components/partials/UtilsCore';

/**
 * Re-exports the `coreAccesosBsc` from the `authservice` module located in `@components/service`.
 * This allows other modules to import `coreAccesosBsc` directly from this file.
 *
 * @module bsc-library
 * @see {@link @components/service/authservice}
 */
export { FormCore } from '@components/forms/FormLayout';


/**
 * Re-exports form input components from the FormInput module.
 * 
 * @module bsc-library
 * @exports TextInput - A component for text input fields.
 * @exports CheckBoxInput - A component for checkbox input fields.
 * @exports EditorInput - A component for rich text editor input fields.
 * @exports InputGroup - A component for grouping multiple input fields.
 * @exports MultiSelectInput - A component for multi-select input fields.
 * @exports SelectInput - A component for single select input fields.
 */
export {
    TextInput,CheckBoxInput,EditorInput,InputGroup,MultiSelectInput,SelectInput
} from "@components/forms/FormInput"
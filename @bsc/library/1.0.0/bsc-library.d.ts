/// <reference types="react" />
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
declare const Layout: ({ children, path }: {
    children: JSX.Element | JSX.Element[];
    path: string;
}) => JSX.Element;
export default Layout;
export * as graphql from "@infrastructure/graphql/__generated__/graphql-types";
export { Utils404, UtilsAccordion, UtilsTabs, UtilsCard, UtilsPanel, UtilsConfirm, UtilsModal, UtilsSpinner, UtilsButton, UtilsFieldset, UtilsMessages } from '@components/partials/Utils';
export { UtilsCoreToolbar, UtilsCoreTabMenu, UtilsCoreDataTable } from '@components/partials/UtilsCore';
export { coreAccesosBsc } from '@components/service/authservice';
export { FormCore } from '@components/forms/FormLayout';
export { TextInput, CheckBoxInput, EditorInput, InputGroup, MultiSelectInput, SelectInput } from "@components/forms/FormInput";

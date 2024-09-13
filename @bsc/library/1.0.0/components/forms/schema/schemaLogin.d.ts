import * as Yup from 'yup';
export declare const schemaLogin: Yup.ObjectSchema<{
    username_login: string;
    contrasenia_login: string;
}, Yup.AnyObject, {
    username_login: undefined;
    contrasenia_login: undefined;
}, "">;
export declare const schemaPass: Yup.ObjectSchema<{
    contrasenia_login: string;
}, Yup.AnyObject, {
    contrasenia_login: undefined;
}, "">;

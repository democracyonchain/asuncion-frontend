export declare const autenticacionApi: import("@reduxjs/toolkit/query/react").Api<import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, {
    getPostAuth: import("@reduxjs/toolkit/query/react").MutationDefinition<{
        username: string;
        password: string;
    }, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">;
    getAuth: import("@reduxjs/toolkit/query/react").QueryDefinition<{
        username: string;
        password: string;
    }, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">;
    getPerfil: import("@reduxjs/toolkit/query/react").QueryDefinition<any, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">;
    getChangePassword: import("@reduxjs/toolkit/query/react").QueryDefinition<{
        contrasenia: string;
    }, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">;
    getAuthModulos: import("@reduxjs/toolkit/query/react").QueryDefinition<any, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">;
    getAuthModulosPermisos: import("@reduxjs/toolkit/query/react").QueryDefinition<{
        idModulo: number;
    }, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">;
}, "autenticacion", never, typeof import("@reduxjs/toolkit/query/react").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useGetPostAuthMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query/react").MutationDefinition<{
    username: string;
    password: string;
}, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">>, useLazyGetChangePasswordQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<{
    contrasenia: string;
}, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">>, useLazyGetPerfilQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<any, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">>, useLazyGetAuthModulosQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<any, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">>, useLazyGetAuthQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<{
    username: string;
    password: string;
}, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">>, useGetChangePasswordQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<{
    contrasenia: string;
}, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">>, useLazyGetAuthModulosPermisosQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<{
    idModulo: number;
}, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, any, "autenticacion">>;

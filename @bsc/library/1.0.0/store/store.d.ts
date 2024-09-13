export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    actionShared: import("@store/slices").IArguments;
    autenticacion: import("@reduxjs/toolkit/query").CombinedState<{
        getPostAuth: import("@reduxjs/toolkit/query").MutationDefinition<{
            username: string;
            password: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
        getAuth: import("@reduxjs/toolkit/query").QueryDefinition<{
            username: string;
            password: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
        getPerfil: import("@reduxjs/toolkit/query").QueryDefinition<any, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
        getChangePassword: import("@reduxjs/toolkit/query").QueryDefinition<{
            contrasenia: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
        getAuthModulos: import("@reduxjs/toolkit/query").QueryDefinition<any, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
        getAuthModulosPermisos: import("@reduxjs/toolkit/query").QueryDefinition<{
            idModulo: number;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
    }, never, "autenticacion">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        actionShared: import("@store/slices").IArguments;
        autenticacion: import("@reduxjs/toolkit/query").CombinedState<{
            getPostAuth: import("@reduxjs/toolkit/query").MutationDefinition<{
                username: string;
                password: string;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
            getAuth: import("@reduxjs/toolkit/query").QueryDefinition<{
                username: string;
                password: string;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
            getPerfil: import("@reduxjs/toolkit/query").QueryDefinition<any, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
            getChangePassword: import("@reduxjs/toolkit/query").QueryDefinition<{
                contrasenia: string;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
            getAuthModulos: import("@reduxjs/toolkit/query").QueryDefinition<any, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
            getAuthModulosPermisos: import("@reduxjs/toolkit/query").QueryDefinition<{
                idModulo: number;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "autenticacion">;
        }, never, "autenticacion">;
    }, undefined, import("redux").UnknownAction>;
}, {}>, import("redux").StoreEnhancer<{}, {}>]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

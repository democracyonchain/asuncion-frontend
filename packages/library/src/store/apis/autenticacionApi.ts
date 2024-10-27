import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import queryString from 'query-string';

export const autenticacionApi = createApi({

    reducerPath: 'autenticacion',
    
    baseQuery: fetchBaseQuery({
        baseUrl:'http://outvic-api-dev.genialkode.com',
        headers:{
            "Content-Type": "application/json", 
           // Authorization:`Bearer ${localStorage.getItem('tokenUser')}`          
        },      
    }),
    
    endpoints:(builder)=>({

        getPostAuth:builder.mutation<any,{"username":string,"password":string }>({
            query: (data) => ({
                url:'/auth/login',
                method:'POST',
                body:JSON.stringify(data),               
                headers:{
                    "Content-Type": "application/json",                      
                },
            })
        }),
            
        getAuth:builder.query<any,{"username":string,"password":string }>({
            query:(data) => {
                return {
                    url:'/auth/login',
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type": "application/json",
                        "accept":'application/json'                       
                    },
                                                          
                }
            }
        }),

        getPerfil:builder.query({
            query:()=>{
                return{
                    url:'/auth/perfil',
                    headers:{
                        "Content-Type": "application/json",
                        "accept":'application/json', 
                        Authorization:`Bearer ${localStorage.getItem('tokenUser')}`
                    }
                }
            }
        }),

        getChangePassword:builder.query<any,{contrasenia:string}>({
            query:(arg)=>{
                return{
                    url:'/auth/change-password',
                    body:arg,
                    headers:{
                        "Content-Type": "application/json",
                        "accept":'application/json' ,
                        Authorization:`Bearer ${localStorage.getItem('tokenUser')}`
                    }
                }
            }
        }),

        getAuthModulos:builder.query({
            query:()=>{
                return {
                    url:'/auth/modulos',
                    headers:{
                        "Content-Type": "application/json",
                        "accept":'application/json' ,
                        Authorization:`Bearer ${localStorage.getItem('tokenUser')}`
                    }
                }
            },            
        }),
        getAuthModulosPermisos:builder.query<any,{idModulo:number}>({
            query:(idModulo)=>{
                return {
                    url:`/auth/modulos/${idModulo}/permisos` ,
                    headers:{
                        "Content-Type": "application/json",
                        "accept":'application/json' ,
                        Authorization:`Bearer ${localStorage.getItem('tokenUser')}`
                    }
                }
            },            
        }),        
       
    })
})


export const 
    {
        useGetPostAuthMutation,useLazyGetChangePasswordQuery, useLazyGetPerfilQuery,useLazyGetAuthModulosQuery,
        useLazyGetAuthQuery, useGetChangePasswordQuery, useLazyGetAuthModulosPermisosQuery
    } = autenticacionApi;


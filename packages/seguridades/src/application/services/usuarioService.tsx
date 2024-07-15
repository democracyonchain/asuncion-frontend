import { setCache,setInitial,setMessage } from '@presentation/actions';

export const columnsUsuario=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'apellidos', header: 'Apellidos',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '150px' },frozen:true,className:'text-sm ',},
    { field: 'nombres', header: 'Nombres',filter:true, filterPlaceholder:'Buscar', className:'text-sm',style:{ minWidth: '300px' },footer:'Nombres' },
    { field: 'username', header: 'Usuario',style:{ minWidth: '200px' },footer:'Usuario',className:'text-sm'},
    { field: 'provincia.nombre', header: 'Provincia',sortable:true,footer:'Provincia',className:'text-sm',filter:true },   		  
    
]
export const processUsuarioCollection =(parameters:{getUsuarioCollectionLazyQuery:any,setDataUsuarioCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    parameters.getUsuarioCollectionLazyQuery({
        variables:{        
            inputPagination:{
                limit:parameters.limit,
                offset:parameters.offset
            },
            inputOrder:{
                asc:'provincia_id'
            }
        },
        fetchPolicy: parameters.cache,
        onCompleted:(c:any)=>{            
            parameters.setDataUsuarioCollection(c?.adminUsuarioCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataUsuarioCollection([]);
        }
    })
}


export const processRolSelect =(parameters:{getRolSelectLazyQuery:any,setDataRolSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getRolSelectLazyQuery({
        variables:{        
            inputWhere:{
                estado: { is: true }
            }
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{            
            parameters.setDataRolSelect(c?.adminRolCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataRolSelect([]);
        }
    })
}

export const processProvinciaSelect =(parameters:{getProvinciaSelectLazyQuery:any,setDataProvinciaSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getProvinciaSelectLazyQuery({       
        fetchPolicy: 'cache-first',
        onCompleted:(c:any)=>{            
            parameters.setDataProvinciaSelect(c?.adminProvinciaCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataProvinciaSelect([]);
        }
    })
}

export const processEstablecimientoSelect =(parameters:{getEstablecimientoSelectLazyQuery:any,setDataEstablecimientoSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getEstablecimientoSelectLazyQuery({       
        fetchPolicy: 'cache-first',
        onCompleted:(c:any)=>{            
            parameters.setDataEstablecimientoSelect(c?.adminEstablecimientoCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataEstablecimientoSelect([]);
        }
    })
}

export const processUsuarioQuery =(parameters:{getUsuarioLazyQuery:any,setUsuarioQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getUsuarioLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        fetchPolicy:'cache-and-network',
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setUsuarioQuery(c.adminUsuario);           
        },onError:(error:any)=>{
            parameters.setUsuarioQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}


export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        nombres_usuario:'',
        apellidos_usuario:'',
        username_usuario:'',
        correo_usuario:'',
        idRol_usuario:'',
        contrasenia_usuario:'',
        estado_usuario:true
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Usuario',iconNew:'post_add'}));
}

export const processValueForm=(parameters:{setValue:any,usuarioQuery:any,setEstadoForm:any})=>{
   
    parameters.setValue('nombres_usuario',parameters.usuarioQuery?.nombres);
    parameters.setValue('apellidos_usuario',parameters.usuarioQuery?.apellidos);
    parameters.setValue('username_usuario',parameters.usuarioQuery?.username);
    parameters.setValue('correo_usuario',parameters.usuarioQuery?.email);
    parameters.setValue('estado_usuario',parameters.usuarioQuery?.estado);
    parameters.setValue('idRol_usuario',parameters.usuarioQuery?.rolusuario?.map((data:any)=>{		       		
        return(
            data.rol?.id
        )         
    }));
    parameters.setValue('idProvincia_usuario',{id:parameters.usuarioQuery?.provincia?.id});
    parameters.setValue('idEstablecimiento_usuario',{id:parameters.usuarioQuery?.establecimiento?.id});
    parameters.setValue('contrasenia_usuario',parameters.usuarioQuery?.estado);
    parameters.setValue('id_usuario',parameters.usuarioQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.usuarioQuery?.estado)?'Activo':'Inactivo'})
}

export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,usuarioCreateMutation:any,usuarioUpdateMutation:any,
        navigate:any,dispatch:any,
})=>{

    parameters.setVisible(
        {
            status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
            accept:()=>{
                (parameters?.labels?.opt=='N')?processCreateUsuario(
                    {
                        data:parameters.data,toast:parameters.toast,
                        usuarioCreateMutation:parameters.usuarioCreateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,                        
                    }
                ):processUpdateUsuario(
                    {
                        data:parameters.data,toast:parameters.toast,
                        usuarioUpdateMutation:parameters.usuarioUpdateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,
                    }
                )
            },reject:()=>{}
        }
    );

}

const processCreateUsuario=(create:{data:any,toast:any,usuarioCreateMutation:any,navigate:any,dispatch:any})=>{
    
    const dataUsuario=create.data
    create.usuarioCreateMutation({
       variables:{
           inputCreate: {
                apellidos: dataUsuario.apellidos_usuario, 
                email: dataUsuario.correo_usuario, 
                estado: dataUsuario.estado_usuario, 
                nombres: dataUsuario.nombres_usuario, 
                password: dataUsuario.contrasenia_usuario,
                provincia_id: dataUsuario.idProvincia_usuario.id,
                roles: dataUsuario.idRol_usuario,
                username: dataUsuario.username_usuario,               
                establecimiento_id:dataUsuario.idEstablecimiento_usuario
           }
       },
       onCompleted:(c:any)=>{      
           create.navigate("record");       
           create.dispatch(setInitial({initial:1}))
           create.dispatch(setMessage({message:c.adminUsuarioCreate?.message}))
       },onError:(error:any)=>{           
           create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
       }
    })
}

const processUpdateUsuario=(update:{data:any,toast:any,usuarioUpdateMutation:any,navigate:any,dispatch:any})=>{
    const dataUsuario=update.data
    update.usuarioUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataUsuario.id_usuario,
                apellidos: dataUsuario.apellidos_usuario, 
                email: dataUsuario.correo_usuario, 
                estado: dataUsuario.estado_usuario, 
                nombres: dataUsuario.nombres_usuario,                
                provincia_id: dataUsuario.idProvincia_usuario.id,
                roles: dataUsuario.idRol_usuario,
                username: dataUsuario.username_usuario,
                establecimiento_id:dataUsuario.idEstablecimiento_usuario.establecimiento_id
           }
        },onCompleted:(c:any)=>{      
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.adminUsuarioUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}

export const processEliminarUsuario=(eliminar:{data:any,toast:any,usuarioDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataUsuario=eliminar.data
    eliminar.usuarioDeleteMutation({
        variables:{
            id: dataUsuario.id,
        },
        onCompleted:(c:any)=>{
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.adminUsuarioDelete?.message}));                                              
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });              
        }
    })
}
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
            parameters.setDataUsuarioCollection(c?.usuarioCollection);
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
        fetchPolicy: 'cache-first',
        onCompleted:(c:any)=>{            
            parameters.setDataRolSelect(c?.rolCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataRolSelect([]);
        }
    })
}

export const processUsuarioQuery =(parameters:{getUsuarioLazyQuery:any,setUsuarioQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getUsuarioLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setUsuarioQuery(c.menu);           
        },onError:(error:any)=>{
            parameters.setUsuarioQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}




export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        titulo_menu:'',
        idModulo_menu:'',
        url_menu:'',
        icono_menu:'',
        color_menu:'',
        id_menu:''
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Menu',iconNew:'pi pi-clone'}));
}

export const processValueForm=(parameters:{setValue:any,usuarioQuery:any,setEstadoForm:any})=>{
   
    parameters.setValue('titulo_menu',parameters.usuarioQuery?.titulo);
    parameters.setValue('idModulo_menu',{id:parameters.usuarioQuery?.modulo.id});
    parameters.setValue('url_menu',parameters.usuarioQuery?.url);
    parameters.setValue('icono_menu',parameters.usuarioQuery?.icono);
    parameters.setValue('orden_menu',parameters.usuarioQuery?.orden);
    parameters.setValue('estado_menu',parameters.usuarioQuery?.estado);
    parameters.setValue('id_menu',parameters.usuarioQuery?.id);
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
    
    const dataMenu=create.data
    create.usuarioCreateMutation({
       variables:{
           inputCreate: {
               modulo_id: dataMenu.idModulo_menu.id, 
               orden: dataMenu.orden_menu, 
               icono: dataMenu.icono_menu, 
               titulo: dataMenu.titulo_menu, 
               url: dataMenu.url_menu,                
           }
       },
       onCompleted:(c:any)=>{      
           create.navigate("record");       
           create.dispatch(setInitial({initial:1}))
           create.dispatch(setMessage({message:c.usuarioCreate?.message}))
       },onError:(error:any)=>{           
           create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
       }
    })
}

const processUpdateUsuario=(update:{data:any,toast:any,usuarioUpdateMutation:any,navigate:any,dispatch:any})=>{
    const dataMenu=update.data
    update.usuarioUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataMenu.id_menu,
                modulo_id: dataMenu.idModulo_menu.id, 
                orden: dataMenu.orden_menu, 
                icono: dataMenu.icono_menu, 
                titulo: dataMenu.titulo_menu, 
                url: dataMenu.url_menu,
                estado: dataMenu.estado_menu,
           }
        },onCompleted:(c:any)=>{      
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.usuarioUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}

export const processEliminarUsuario=(eliminar:{data:any,toast:any,usuarioDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataMenu=eliminar.data
    eliminar.usuarioDeleteMutation({
        variables:{
            id: dataMenu.id,
        },
        onCompleted:(c:any)=>{
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.menuDelete?.message}));                                              
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });              
        }
    })
}
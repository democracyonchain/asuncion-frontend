import { setCache,setInitial,setMessage } from '@presentation/actions';

export const columnsMenu=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'titulo', header: 'Título',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '150px' },frozen:true,className:'text-sm ',},
    { field: 'orden', header: 'Orden',sortable:true,footer:'Orden',className:'text-sm' },
    { field: 'modulo.nombre', header: 'Módulo',sortable:true,footer:'Módulo',className:'text-sm',filter:true },   		  
    { field: 'url', header: 'Url',filter:true, filterPlaceholder:'Buscar', className:'text-sm',style:{ minWidth: '300px' },footer:'Url' },
    { field: 'icono', header: 'Icono',style:{ minWidth: '200px' },footer:'Icono',className:'text-sm'},
]
export const processMenuCollection =(parameters:{getMenuCollectionLazyQuery:any,setDataMenuCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    parameters.getMenuCollectionLazyQuery({
        variables:{        
            inputPagination:{
                limit:parameters.limit,
                offset:parameters.offset
            },
            inputOrder:{
                asc:'modulo_id'
            }
        },
        fetchPolicy: parameters.cache,
        onCompleted:(c:any)=>{            
            parameters.setDataMenuCollection(c?.menuCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataMenuCollection([]);
        }
    })
}

export const processModuloSelect =(parameters:{getModuloSelectLazyQuery:any,setDataModuloSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getModuloSelectLazyQuery({
        variables:{        
            inputWhere:{
                estado: { is: true }
            }
        },
        fetchPolicy: 'cache-first',
        onCompleted:(c:any)=>{            
            parameters.setDataModuloSelect(c?.moduloCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataModuloSelect([]);
        }
    })
}

export const processMenuQuery =(parameters:{getMenuLazyQuery:any,setMenuQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getMenuLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setMenuQuery(c.menu);           
        },onError:(error:any)=>{
            parameters.setMenuQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}


export const processEliminarMenu=(eliminar:{data:any,toast:any,menuDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataMenu=eliminar.data
    eliminar.menuDeleteMutation({
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

export const processValueForm=(parameters:{setValue:any,menuQuery:any,setEstadoForm:any})=>{
   
    parameters.setValue('titulo_menu',parameters.menuQuery?.titulo);
    parameters.setValue('idModulo_menu',{id:parameters.menuQuery?.modulo.id});
    parameters.setValue('url_menu',parameters.menuQuery?.url);
    parameters.setValue('icono_menu',parameters.menuQuery?.icono);
    parameters.setValue('orden_menu',parameters.menuQuery?.orden);
    parameters.setValue('estado_menu',parameters.menuQuery?.estado);
    parameters.setValue('id_menu',parameters.menuQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.menuQuery?.estado)?'Activo':'Inactivo'})
}

export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,menuCreateMutation:any,menuUpdateMutation:any,
        navigate:any,dispatch:any,
})=>{

    parameters.setVisible(
        {
            status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
            accept:()=>{
                (parameters?.labels?.opt=='N')?processCreateMenu(
                    {
                        data:parameters.data,toast:parameters.toast,
                        menuCreateMutation:parameters.menuCreateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,                        
                    }
                ):processUpdateMenu(
                    {
                        data:parameters.data,toast:parameters.toast,
                        menuUpdateMutation:parameters.menuUpdateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,
                    }
                )
            },reject:()=>{}
        }
    );

}

const processCreateMenu=(create:{data:any,toast:any,menuCreateMutation:any,navigate:any,dispatch:any})=>{
    
    const dataMenu=create.data
    create.menuCreateMutation({
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
           create.dispatch(setMessage({message:c.menuCreate?.message}))
       },onError:(error:any)=>{           
           create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
       }
    })
}

const processUpdateMenu=(update:{data:any,toast:any,menuUpdateMutation:any,navigate:any,dispatch:any})=>{
    const dataMenu=update.data
    update.menuUpdateMutation({
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
            update.dispatch(setMessage({message:c.menuUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}
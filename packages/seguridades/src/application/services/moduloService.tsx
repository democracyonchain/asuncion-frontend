import { setCache,setInitial,setMessage } from '@presentation/actions';

export const columnsModulo=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'nombre', header: 'Nombre',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '200px' },frozen:true,className:'text-sm ',},   
    { field: 'codigo', header: 'Código',sortable:true,footer:'Código',className:'text-sm' },   		  
    { field: 'url', header: 'Url',filter:true, filterPlaceholder:'Buscar', className:'text-sm',style:{ minWidth: '300px' },footer:'Url' },
    { field: 'icono', header: 'Icono',style:{ minWidth: '200px' },footer:'Icono',className:'text-sm'},
    { field: 'color', header: 'Color',style:{ minWidth: '200px' },footer:'Color',className:'text-sm'}		
]
export const processModuloCollection =(parameters:{getModuloCollectionLazyQuery:any,setDataModuloCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    
    parameters.getModuloCollectionLazyQuery({
        variables:{        
            inputPagination:{
                limit:parameters.limit,
                offset:parameters.offset
            },
            inputOrder:{
                asc:'nombre'
            }
        },
        fetchPolicy: parameters.cache,
        onCompleted:(c:any)=>{            
            parameters.setDataModuloCollection(c?.moduloCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataModuloCollection([]);
        }
    })
}

export const processModuloQuery =(parameters:{getModuloLazyQuery:any,setModuloQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getModuloLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setModuloQuery(c.modulo);           
        },onError:(error:any)=>{
            parameters.setModuloQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}


export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        nombre_modulo:'',
        codigo_modulo:'',
        url_modulo:'',
        icono_modulo:'',
        color_modulo:'',
        id_modulo:'',
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Modulo',iconNew:'pi pi-clone'}));
}

export const processValueForm=(parameters:{setValue:any,moduloQuery:any,setEstadoForm:any})=>{
    parameters.setValue('nombre_modulo',parameters.moduloQuery?.nombre);
    parameters.setValue('codigo_modulo',parameters.moduloQuery?.codigo);
    parameters.setValue('url_modulo',parameters.moduloQuery?.url);
    parameters.setValue('icono_modulo',parameters.moduloQuery?.icono);
    parameters.setValue('color_modulo',parameters.moduloQuery?.color);
    parameters.setValue('estado_modulo',parameters.moduloQuery?.estado);
    parameters.setValue('id_modulo',parameters.moduloQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.moduloQuery?.estado)?'Activo':'Inactivo'})
}

export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,moduloCreateMutation:any,moduloUpdateMutation:any,
        navigate:any,dispatch:any,
})=>{

    parameters.setVisible(
        {
            status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
            accept:()=>{
                (parameters?.labels?.opt=='N')?processCreateModulo(
                    {
                        data:parameters.data,toast:parameters.toast,
                        moduloCreateMutation:parameters.moduloCreateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,                        
                    }
                ):processUpdateModulo(
                    {
                        data:parameters.data,toast:parameters.toast,
                        moduloUpdateMutation:parameters.moduloUpdateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,
                    }
                )
            },reject:()=>{}
        }
    );

}

const processCreateModulo=(create:{data:any,toast:any,moduloCreateMutation:any,navigate:any,dispatch:any})=>{
    
     const dataModulo=create.data
     create.moduloCreateMutation({
        variables:{
            inputCreate: {
                codigo: dataModulo.codigo_modulo, 
                color: dataModulo.color_modulo, 
                icono: dataModulo.icono_modulo, 
                nombre: dataModulo.nombre_modulo, 
                url: dataModulo.url_modulo,                
            }
        },
        onCompleted:(c:any)=>{                   
            create.navigate("record");       
            create.dispatch(setInitial({initial:1}))
            create.dispatch(setMessage({message:c.moduloCreate?.message}))
        },onError:(error:any)=>{           
            create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
        }
     })
}

const processUpdateModulo=(update:{data:any,toast:any,moduloUpdateMutation:any,navigate:any,dispatch:any})=>{
    const dataModulo=update.data
    update.moduloUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataModulo.id_modulo,
                codigo: dataModulo.codigo_modulo, 
                color: dataModulo.color_modulo, 
                icono: dataModulo.icono_modulo, 
                nombre: dataModulo.nombre_modulo, 
                url: dataModulo.url_modulo,
                estado: dataModulo.estado_modulo
           }
        },onCompleted:(c:any)=>{                 
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.moduloUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}


export const processEliminarModulo=(eliminar:{data:any,toast:any,moduloDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataModulo=eliminar.data
    eliminar.moduloDeleteMutation({
        variables:{
            id: dataModulo.id,
        },
        onCompleted:(c:any)=>{  
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.moduloDelete?.message}));
                                                          
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
        }
    })
}
import { setCache,setInitial,setMessage } from '@presentation/actions';
import { CheckBoxInput } from "@bsc/library";

export const columnsRol=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'nombre', header: 'Nombre',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '150px' },frozen:true,className:'text-sm ',},
    { field: 'descripcion', header: 'Descripción',sortable:true,footer:'Descripción',className:'text-sm' },
]

export const categories = [
    { name: 'crear', key:'c', icon:'add' },
    { name: 'editar', key:'e', icon:'edit_square'},
    { name: 'eliminar', key: 'd', icon:'delete' },
    { name: 'leer', key: 'r', icon:'draft' },
    { name: 'imprimir', key: 'i', icon:'lab_profile' }
]
export const processRolCollection =(parameters:{getRolCollectionLazyQuery:any,setDataRolCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    parameters.getRolCollectionLazyQuery({
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
            parameters.setDataRolCollection(c?.adminRolCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataRolCollection([]);
        }
    })
}

export const processRolQuery =(parameters:{getRolLazyQuery:any,setRolQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getRolLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setRolQuery(c.adminRol);           
        },onError:(error:any)=>{
            parameters.setRolQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}

export const processMenuSelect =(parameters:{getMenuSelectLazyQuery:any,setDataMenuSelect:any,cache:string,dispatch:any,setDisabled:any})=>{
    
    parameters.getMenuSelectLazyQuery({
        variables:{        
            inputWhere:{
                estado: { is: true }
            }
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{  
            let valoresDiabled:any=[]          
            parameters.setDataMenuSelect(c?.adminMenuCollection?.data);
            c?.adminMenuCollection?.data.forEach((values:any,key:any)=>{               
                valoresDiabled =[...valoresDiabled,{menu:values.titulo,disabled:true,key}]
            })          

            parameters.setDisabled(valoresDiabled)
           
        },onError:(error:any)=>{            
            parameters.setDataMenuSelect([]);
        }
    })
}

export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        nombre_rol:'',
        descripcion_rol:'',
        id_rol:''
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Rol',iconNew:'post_add'}));
}

export const processValueForm=(parameters:{setValue:any,rolQuery:any,setEstadoForm:any,setDisabled:any,disabled:any,getValues:any})=>{
    parameters.setValue('nombre_rol',parameters.rolQuery?.nombre);
    parameters.setValue('descripcion_rol',parameters.rolQuery?.descripcion);
    parameters.setValue('estado_rol',parameters.rolQuery?.estado);
    parameters.setValue('id_rol',parameters.rolQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.rolQuery?.estado)?'Activo':'Inactivo'});

    parameters.rolQuery?.permisos?.forEach((data:any,key:number) => {    
          
        parameters.setValue(`accesos${data.menu.titulo}${data.menu.id}`,true);
        let demoDisabled=parameters.disabled.filter((e:any,key:any)=>e.menu == data.menu.titulo);

        if(demoDisabled.length > 0){            
            parameters.disabled[demoDisabled[0]?.key].disabled=false;
        }
       
        parameters.setDisabled([...parameters.disabled])
        
        categories.forEach((options,key1)=>{
            if(data[options.name]){
                parameters.setValue(`accesos${key1}${data.menu.id}`,true);
                    processDataCheck({data:data.menu,category:options,chek:true,key:demoDisabled[0]?.key,opt:'C',setValue:parameters.setValue,getValues:parameters.getValues})                
            }else{
                if(demoDisabled.length > 0){
                    processDataCheck({data:data.menu,category:options,chek:false,key:demoDisabled[0]?.key,opt:'C',setValue:parameters.setValue,getValues:parameters.getValues})
                }
            }
        })
    });
}


export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,rolCreateMutation:any,rolUpdateMutation:any,
        navigate:any,dispatch:any,setMensaje:any
})=>{


   
    let resulAcceso= (parameters.data?.menuAcceso)?(parameters.data?.menuAcceso)?.filter((e:any)=>e?.status ==true):[];
    let resulAccesoGeneral:any=[]
   
    if(resulAcceso.length >0){
       
        resulAcceso.forEach((data:any) => {        
            resulAccesoGeneral =[...resulAccesoGeneral,{
                crear:data.crear,
                editar:data.editar,
                eliminar:data.eliminar,
                leer:data.leer,
                imprimir:data.imprimir,
                menu_id:data.menu_id
            }]           
        });
        
        
        parameters.setMensaje(null)
        parameters.setVisible(
            {
                status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
                accept:()=>{
                    (parameters?.labels?.opt=='N')?processCreateRol(
                        {
                            data:parameters.data,toast:parameters.toast,
                            rolCreateMutation:parameters.rolCreateMutation,
                            navigate:parameters.navigate,
                            dispatch:parameters.dispatch,  
                            resulAccesoGeneral                      
                        }
                    ):processUpdateRol(
                        {
                            data:parameters.data,toast:parameters.toast,
                            rolUpdateMutation:parameters.rolUpdateMutation,
                            navigate:parameters.navigate,
                            dispatch:parameters.dispatch,
                            resulAccesoGeneral
                        }
                    )
                },reject:()=>{}
            }
        );
    }else{
        parameters.setMensaje('Registre los accesos en listado de Menu ')
    }

}


const processCreateRol=(create:{data:any,toast:any,rolCreateMutation:any,navigate:any,dispatch:any,resulAccesoGeneral:any})=>{
    
    const dataRol=create.data
    create.rolCreateMutation({
       variables:{
           inputCreate: {
                descripcion: dataRol.descripcion_rol, 
                nombre: dataRol.nombre_rol,   
                permisos:create.resulAccesoGeneral          
           }
       },
       onCompleted:(c:any)=>{             
           create.navigate("record");       
           create.dispatch(setInitial({initial:1}))
           create.dispatch(setMessage({message:c.adminRolCreate?.message}))
       },onError:(error:any)=>{           
           create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
       }
    })
}

const processUpdateRol=(update:{data:any,toast:any,rolUpdateMutation:any,navigate:any,dispatch:any,resulAccesoGeneral:any})=>{
    const dataRol=update.data   
    update.rolUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataRol.id_rol,
                descripcion: dataRol.descripcion_rol, 
                nombre: dataRol.nombre_rol,
                estado:dataRol.estado_rol, 
                permisos:update.resulAccesoGeneral      
           }
        },onCompleted:(c:any)=>{       
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.adminRolUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}

export const processEliminarRol=(eliminar:{data:any,toast:any,rolDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataRol=eliminar.data
    eliminar.rolDeleteMutation({
        variables:{
            id: dataRol.id,
        },
        onCompleted:(c:any)=>{
            eliminar.dispatch(setCache({cache:'cache-and-network'}));  
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.adminRolDelete?.message}));                                              
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });              
        }
    })
}

export const processDataCheck=(parameters:{data:any,category:any,chek:boolean,key:number,opt:string,etiqueta?:any,setValue:any,getValues:any})=>{    
    if(parameters.opt=='C'){
        
        (parameters.chek)?parameters.setValue(`menuAcceso.${parameters.key}`,{...parameters.getValues(`menuAcceso.${parameters.key}`),menu_id:parameters.data.id,[parameters.category.name]:true,status:true}):
        parameters.setValue(`menuAcceso.${parameters.key}`,{...parameters.getValues(`menuAcceso.${parameters.key}`),menu_id:parameters.data.id,[parameters.category.name]:false})
    }else{
        parameters.setValue(`menuAcceso.${parameters.key}`,{...parameters.getValues(`menuAcceso.${parameters.key}`),menu_id:parameters.data.id,[parameters.category.name]:false,status:false})   
    }
}

export const processHeaderTemplate=(parameters:{ data:any,options:any,key:any,setValue:any,getValues:any,methods:any,setDisabled:any,disabled:any})=>{        
    const className = ` ${parameters.options.className} p-panel-header justify-content-space-between`;
    return(
        <div className={className}>
            <div className="flex align-items-center gap-2">
               
                <CheckBoxInput  methods={parameters.methods} name={`accesos${parameters.data.titulo}${parameters.data.id}`}  value= {`${parameters.data}`}  
                onChangeCheck={
                    (e:any)=>{
                        
                            if(e.checked){
                                parameters.disabled[parameters.key].disabled=false
                            }else{
                                parameters.disabled[parameters.key].disabled=true
                            }
                            
                            parameters.setDisabled([...parameters.disabled])

                            
                        categories.forEach((options,key)=>{
                            if(e.checked){                                                             
                                parameters.setValue(`accesos${key}${parameters.data.id}`,true);
                                processDataCheck({data:parameters.data,category:options,chek:true,key:parameters.key,opt:'C',setValue:parameters.setValue,getValues:parameters.getValues})
                            }else{                                    
                                parameters.setValue(`accesos${key}${parameters.data.id}`,false);
                                processDataCheck({data:parameters.data,category:options,chek:false,key:parameters.key,opt:'D',setValue:parameters.setValue,getValues:parameters.getValues})
                            }
                        })
                    }
                }/>

                <span className='text-xs font-semibold uppercase' > Menu: {parameters.data.titulo}</span>
            </div>
            <div>                                  
                {parameters.options.togglerElement}
            </div>
        </div>
    )
}
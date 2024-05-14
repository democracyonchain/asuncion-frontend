import { Dispatch} from "react";
import { FormProvider } from "react-hook-form";
import { Constantes} from "@components/service/constantes";
import { UtilsButton,UtilsModal } from '@components/partials/Utils'

export const FormLayout = (
    { 
        children,methods,onSubmit,labels={btn1:'Cancelar',btn2:'Guardar',btn3:'',btn4:'',icon:true,btnload:false},
        opt=Constantes.NUEVO_REGISTRO,onReset,onResetData,onFinalizar,modal, modal48, openmodal=true,
        visibleModal=false,setVisibleModal,width='50rem'
    }:
    {   
        children: string | JSX.Element | JSX.Element[],methods:any,onSubmit:any,labels:{btn1:string,btn2:string,btn3?:string,btn4?:string,icon:boolean,btnload:boolean},
        opt?:string,onReset:any,onResetData?:any,onFinalizar?:any,modal?:boolean,modal48?:boolean, openmodal?:boolean,
        visibleModal:any,setVisibleModal?:Dispatch<any>,width?:any
    }) =>
    {
        return (        
            <FormProvider {...methods}>
                <form  autoComplete="off">  
                    <UtilsModal 
                        contenido={
                            <>
                                
                            <div className="mb-2">  
                            {(opt == Constantes.NUEVO_REGISTRO || opt == Constantes.EDITAR_REGISTRO)&&
                                <small color="red" className="p-error text-xs text-red-500 font-medium">
                                        Campos Obligatorios &nbsp; <span className="text-xl">*</span>
                                </small>
                            }
                            </div>                      

                            {children}

                            
                            </>
                        } 
                        
                        closable={visibleModal.closable}
                        closeOnEscape={visibleModal.closacloseOnEscapeble}
                        headerElement={visibleModal.header}
                        visible={visibleModal.active} 
                        setVisible={setVisibleModal} 
                        footerContent={
                            <>
                                {(labels.btn1)&&                   
                                    <UtilsButton 
                                    type='button'  
                                    outlined 
                                    onClick={onReset} 
                                    icon={'pi pi-times'}
                                    size={'small'}  
                                    severity="danger"                                    
                                      
                                    label= {labels.btn1}   
                                    className="text-sm"/>
                                } 
                                {(labels.btn2)&&
                                    <UtilsButton  
                                    type='submit'  
                                     
                                    icon={'pi pi-check'} 
                                    label= {labels.btn2} 
                                    size={'small'} 
                                    severity="primary"  
                                  
                                    className="text-sm" 
                                    onClick={methods.handleSubmit(onSubmit)}/>
                                } 
                            </>
                        }
                        maximizable={visibleModal.maximizable}
                        width={width} 
                    />
                </form>                             
            </FormProvider>
        )
}


export const FormLayoutInit = (
    { 
        children,methods,onSubmit,labels={btn1:'Cancelar',btn2:'Guardar',btn3:'',btn4:'',icon:true,btnload:false},
        opt=Constantes.NUEVO_REGISTRO,onReset,onResetData,onFinalizar,modal, modal48, openmodal=true,
        visibleModal=false,setVisibleModal
    }:
    {   
        children: string | JSX.Element | JSX.Element[]|any,methods:any,onSubmit:any,labels:{btn1:string,btn2:string,btn3?:string,btn4?:string,icon:boolean,btnload:boolean},
        opt?:string,onReset:any,onResetData?:any,onFinalizar?:any,modal?:boolean,modal48?:boolean, openmodal?:boolean,
        visibleModal:any,setVisibleModal?:Dispatch<any>
    }) =>
    {

        return (        
            <FormProvider {...methods}>
                <form  autoComplete="off" className=""> 
                    <div className="flex align-items-center justify-content-center mt-10 p-5 ">
                        <div className="surface-card p-5  border-round-xl w-full  xl:w-3 shadow-1 surface-border m-2">
                            {children}
                            <div className="mb-4">
                            {(labels.btn1)&&                   
                                <UtilsButton type='button'  onClick={onReset} icon={'pi pi-times'} severity="danger" label= {labels.btn1}   raised className="text-sm text-red-500"/>
                            } 
                            {(labels.btn2)&&
                                <UtilsButton  size='small' type='submit'  icon={'pi pi-user'} label= {labels.btn2} className="w-full text-sm" onClick={methods.handleSubmit(onSubmit)}/>
                            } 
                            </div>
                        </div>
                    </div>
                </form>                             
            </FormProvider>
        )
}
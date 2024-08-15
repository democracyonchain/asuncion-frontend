import { Dispatch} from "react";
import { FormProvider } from "react-hook-form";
import { Constantes} from "@components/service/constantes";
import { UtilsButton,UtilsModal,UtilsConfirm } from '@components/partials/Utils'
import { Panel } from 'primereact/panel';
import { Toast } from 'primereact/toast';
import Icon from '@mui/material/Icon';
interface IFormValues{
    children: string | JSX.Element | JSX.Element[]|any
    methods:any
    onSubmit:any
    labels:{btn1:string,btn2:string,btn3?:string,btn4?:string,icon:boolean,btnload:boolean}
    onReset:any
    setVisible?:any
    visible?:any
    toast?:any
}
export const FormLayout = (
    { 
        children,methods,onSubmit,labels={btn1:'Cancelar',btn2:'Guardar',btn3:'',btn4:'',icon:true,btnload:false},
        opt=Constantes.NUEVO_REGISTRO,onReset,visibleModal,setVisibleModal,width='50rem'
    }:
    {   
        children: string | JSX.Element | JSX.Element[],methods:any,onSubmit:any,labels:{btn1:string,btn2:string,btn3?:string,btn4?:string,icon:boolean,btnload:boolean},
        opt?:string,onReset:any,visibleModal:any,setVisibleModal?:Dispatch<any>,width?:any
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
                        closeOnEscape={visibleModal.closeOnEscape}
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
                                    raised link text 
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
                                    raised link text                            
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
        children,methods,onSubmit,labels={btn1:'Cancelar',btn2:'Guardar',btn3:'',btn4:'',icon:true,btnload:false},onReset
    }:IFormValues
    ) =>
    {

        return (        
            <FormProvider {...methods}>
                <form  autoComplete="off" className=""> 
                    <div className="flex align-items-center justify-content-center mt-10 p-5 ">
                        <div className="surface-card p-5  border-round-xl w-full  xl:w-3 shadow-8 surface-border m-2 ">
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

export const FormCore=(
    { 
        children,methods,onSubmit,labels={btn1:'Cancelar',btn2:'Guardar',btn3:'',btn4:'',icon:true,btnload:false},
        onReset,setVisible,visible,toast
    }:IFormValues
)=>{

    const footerTemplate = (options:any) => {
        const className = `${options.className} flex flex-wrap align-items-center justify-content-between gap-3`;

        return (
            <div className={className}>
                <span className="p-text-secondary">&nbsp;</span>
                <div className="flex align-items-center gap-2">
                    {(labels.btn1)&&                   
                        <UtilsButton size='small' type='button'  raised link text  onClick={onReset} icon={'pi pi-times'} className="w-full text-sm" severity="danger" label= {labels.btn1} />
                    } 
                    {(labels.btn2)&&
                        <UtilsButton  size='small' type='submit'  raised link text icon={'pi pi-check'} label= {labels.btn2} className="w-full text-sm" severity="primary" onClick={methods.handleSubmit(onSubmit)}/>
                    } 
                    {(labels.btn3)&&
                        <UtilsButton  size='small' type='submit'  raised link text icon={<Icon >download</Icon>} label= {labels.btn3} className="w-10rem text-sm" severity="danger" onClick={methods.handleSubmit(onSubmit)}/>
                    }
                </div>
             
            </div>
        );
    };


    const headerTemplate = (options:any) => {
        const className = `${options.className} justify-content-space-between`;
        
        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <small color="red" className="p-error text-xs text-red-500 font-medium">
                        Campos Obligatorios &nbsp; <span className="text-xl">*</span>
                    </small>
                </div>
                <div>                   
                    {options.togglerElement}
                </div>
            </div>
        );
    };

    return (
        <>
            <UtilsConfirm setVisible={setVisible} visible={visible?.status} message={visible?.mensaje} accept={visible?.accept} reject={visible?.reject}/>
            <Toast ref={toast} position="bottom-center" pt={{content:{className:'border-round-lg shadow-2'},message:{className:'text-sm font-semibold'}}}/>
            <FormProvider {...methods}> 
                <form  autoComplete="off" className=""> 
                    <Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate} toggleable className="mt-4">
                        {children}
                    </Panel>
                </form>        
            </FormProvider>
        </>
    )
}
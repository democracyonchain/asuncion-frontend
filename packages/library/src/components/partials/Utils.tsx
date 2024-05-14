import React, { useEffect, useRef, useState,Dispatch } from 'react';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';
import { ScrollPanel } from 'primereact/scrollpanel';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Menu } from 'primereact/menu';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import { StyleClass } from 'primereact/styleclass';
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';
import { useNavigate } from "react-router-dom";
export const UtilsButton = (
    {
        label=undefined,type='button',link=false,icon='',loading=false,onClick,severity=undefined,
        disabled=false,raised=false,rounded=false,text=false,outlined=false,ariaLabel='',badge,
        badgeClassName='', size=undefined, className, autoFocus=false
    }:
    {
        label:string|undefined,type:any,link?:boolean,icon?:any,loading?:boolean,onClick?:any,severity?:any,
        disabled?:boolean,raised?:boolean,rounded?:boolean,text?:boolean,outlined?:boolean,ariaLabel?:any,badge?:any,
        badgeClassName?:any,size?:any,className?:any,autoFocus?:boolean
    }) => {

    return (
        <Button 
            label={label} rounded={rounded} type={type} link={link}  icon={icon} loading={loading} onClick={onClick} severity={severity}
            disabled={disabled} raised={raised} text={text} outlined={outlined} aria-label={ariaLabel} badge={badge} 
            badgeClassName={badgeClassName} size={size} className={className} autoFocus={autoFocus} 
        />
    )
}


export const UtilsAccordion=(
    {
        data=[{header:'demo1',children:(<> Demo 1</>),disabled:false}],active=0,onClick
    }:
    {
        data:[{header:any,children:any,disabled:boolean}],active:number,onClick:()=>{}
    }
    )=>{
    

        const [activeIndex, setActiveIndex] = useState<number|number[]>();
    const createDynamicTabs = () => {
        return data.map((tab, i) => {
            return (
                <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };    
   
    useEffect(()=>{
        setActiveIndex(active);       
    },[active])

  
    return (
        <Accordion activeIndex={activeIndex} onTabChange={onClick}>{createDynamicTabs()}</Accordion>
    )
}

export const UtilsFieldset=({data,legend='',toggleable=false}:{data:any,legend:string|null|JSX.Element|JSX.Element[],toggleable:boolean})=>{

    return (
        <Fieldset legend={legend} toggleable={toggleable}>
            {data}
        </Fieldset>
    )

}

export const UtilsDivider=(
        {
            type='solid',align=undefined,content=null,layout='horizontal'
        }:
        {
            type:any,align:any,content:string|null|JSX.Element|JSX.Element[],
            layout:any
        }
    )=>{

    return (
        <Divider type={type} align={align} layout={layout}>
            {content}
        </Divider>
    )
}

export const UtilsScrollPanel=(
    {
        content='',style={width: '100%', height: '150px'},className=''
    }:
    {
        content:string|null|JSX.Element|JSX.Element[],
        style:{},className:any
    })=>{
    return (
        <ScrollPanel style={style} className={className}>
            {content}
        </ScrollPanel>
    )
}


export const UtilsTabs =(
    {
        data=[{header:'Demo Tab',content:'Demo Tab',disabled:false}],
        scrollable=false,active=0,onClick
    }:
    {
        data:[
            {
                header:string|null|JSX.Element|JSX.Element[],content:string|null|JSX.Element|JSX.Element[],
                disabled?:boolean,leftIcon?:any,rightIcon?:any
            }
        ],
        scrollable:boolean,active:number,onClick:()=>{}
    })=>{

    const [activeIndex, setActiveIndex] = useState<number>();

    useEffect(()=>{
        setActiveIndex(active);       
    },[active])

    return (
        <TabView scrollable={scrollable} activeIndex={activeIndex} onTabChange={onClick}>
             {data.map(({ header, content, disabled,leftIcon,rightIcon},index) => (
                    <TabPanel key={index} header={header} disabled={(disabled)?true:false} leftIcon={leftIcon} rightIcon={rightIcon} >                       
                       {content}
                    </TabPanel>
            ))}
        </TabView>
    )
}

export const UtilsCard=(
    {
        title='',subTitle='',footer='',header='', className='md:w-25rem',content=''
    }:
    {
        title:string,subTitle:string,footer:string|null|JSX.Element|JSX.Element[],
        header:string|null|JSX.Element|JSX.Element[],className:string,
        content:string|null|JSX.Element|JSX.Element[]
    })=>{

    return (
        <Card title={title} subTitle={subTitle} footer={footer} header={header} className={className}>
            {content}
        </Card>
    )
}

export const UtilsPanel=(
    {
        headerTemplate='',
        footerTemplate='',
        toggleable=false,
        ref,
        content='',
        header='', 
        isFrm=false
    }:
    {
        headerTemplate:string|null|JSX.Element|JSX.Element[],
        footerTemplate:string|null|JSX.Element|JSX.Element[],
        toggleable:boolean
        ref:any
        content:string|null|JSX.Element|JSX.Element[],
        header:string|null|JSX.Element|JSX.Element[],
        className:string,
        isFrm:boolean
    })=>{

        const configMenu = useRef<any>(null);;
        const items = [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    
        const headerTemplateAux = (options:any) => {
            const className = `${options.className} justify-content-space-between`;
    
            return (
                <div className={className}>
                     <div className="flex align-items-center gap-2">
                        <span className="font-bold">Formulario Roles</span>
                    </div>
                    <div>
                        <Menu model={items} popup ref={configMenu} id="config_menu" />
                        <button className="p-panel-header-icon p-link mr-2" onClick={(e) => configMenu?.current?.toggle(e)}>
                            <span className="pi pi-cog"></span>
                        </button>
                        {options.togglerElement}
                    </div>
                </div>
            );
        };


    const footerTemplateAux = (options:any) => {
        const className = `${options.className} flex flex-wrap align-items-center justify-content-between gap-3`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Button icon="pi pi-save" severity='info' rounded text></Button>
                    <Button icon="pi pi-times" severity="danger" rounded text></Button>
                </div>
                <span className="p-text-secondary">Updated 2 hours ago</span>
            </div>
        );
    };

    return (
        <Panel ref={ref} header={header} headerTemplate={(isFrm)?headerTemplateAux:headerTemplate} footerTemplate={(isFrm)?footerTemplateAux:footerTemplate} toggleable>
            {content}
        </Panel>
    )
}

export const UtilsConfirm=(
    {
        setVisible,
        visible=false,
        accept,
        reject,
        message='Mensaje',
        header='Confirmación',
        icon='pi pi-exclamation-triangle',
        opt=1
    }:
    {
        setVisible:Dispatch<any>,
        visible:boolean,
        accept:()=>{},
        reject:()=>{},
        message:string,
        header:string,
        icon:string,
        opt:number
    })=>{
              
    return (
        <ConfirmDialog 
            visible={visible} onHide={() => {setVisible({status:false,opt:opt,mensaje:message,header:header})}}
            message={message} 
            header={header} 
            icon={(opt==1)?'pi pi-exclamation-triangle':'pi pi-info-circle'} 
            accept={accept} reject={reject}
            acceptLabel='Si'
            acceptClassName={(opt==1)?'p-button-label':'p-button-danger'}
            position='top'
        />
    )

}

export const UtilsModal=(
    {
        setVisible,
        visible=false,
        headerElement='',
        footerContent='',
        contenido='',
        maximizable=false,
        closable=true,
        closeOnEscape=true,
        position='center',
        width='50rem'
    }
    :{
        setVisible:any,
        visible:boolean,
        headerElement?:string|null|JSX.Element|JSX.Element[],
        footerContent?:string|null|JSX.Element|JSX.Element[],
        contenido?:string|null|JSX.Element|JSX.Element[],
        maximizable?:boolean
        closable?:boolean
        closeOnEscape?:boolean
        position?:any,
        width?:any
    })=>{

    return (
        <Dialog maximizable={maximizable} visible={visible} modal header={headerElement}  closable={closable} position={position}
        footer={footerContent} style={{ width }} onHide={() => setVisible(false)} closeOnEscape={closeOnEscape}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
        >
            {contenido}
        </Dialog>
    )
}

export const UtilsSpinner=({visible=false}:{visible:boolean})=>{

    return (
        <>
        {(visible)?
            <div  className="flex bg-white-alpha-70 align-items-center justify-content-center p-dialog-mask p-dialog-top p-component-overlay p-component-overlay-enter p-dialog-draggable p-dialog-resizable" 
                    style={{position:"fixed", height:"100%", zIndex:99999999999999, width:"100%"}}>
                    <ProgressSpinner className="" style={{width: '150px', height: '150px'}} strokeWidth="5" fill="var(--surface-ground)" animationDuration="3s"  />
            </div>:''
        }
        </>
        
    )
}

export const UtilsMessages=({
    data=[{sticky:true,severity:'success',summary:'Success',detail: 'Closable Message',closable:true}]    
    }:{
        data:[{sticky?:any,severity:any,summary:string,detail: string,closable?:boolean}]
    })=>{
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
        msgs.current?.show(
            data
        );
    })

    return (<Messages ref={msgs}  pt={{wrapper:{className:'p-2 text-sm'}}}/>)
}

export const Utils404=({path}:{path:string})=>{
    //Varaibles Generales
	const navigate = useNavigate();

    return(
        <>
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div style={{background:'radial-gradient(50% 109138%, rgba(0, 0, 100, 0.1) 0%, rgba(254, 244, 247, 0) 100%)'}} className="text-center">
                    <span className="bg-white text-primary font-bold text-2xl inline-block px-3">404</span>
                </div>
                <div className="mt-8 mb-2 font-bold text-3xl text-600 text-center">Página no encontrada</div>
                <p className="text-500 text-lg mt-0 mb-6 text-center">Lo sentimos, no hemos podido encontrar la página.</p>
                <div className="text-center">
                  <UtilsButton type='button' link severity="secondary" outlined size={'small'} label='Volver a la pagina principal' icon={'pi pi-home' } onClick={()=>{navigate("/app/"+path);}}></UtilsButton>                  
                </div>
            </div>
        </>
    )
}
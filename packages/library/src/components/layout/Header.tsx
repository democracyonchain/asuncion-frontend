import { useRef } from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { TieredMenu } from 'primereact/tieredmenu';
import header from "@public/images/header.png";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { SidebarLayout } from '@components/layout/SidebarLayout'
import { useNavigate } from "react-router-dom";
import { setNavegacion } from '@store/slices/';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from '@store/store';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useAuthlogoutLazyQuery} from "@infrastructure/graphql/__generated__/graphql-types";
import { processAuthLogout } from '@components/service/authservice';

export const Header = ({setVisibleModalAux,path,toast}:{setVisibleModalAux:any,path:string,toast:any}) => {
	//Data Storage
	const getUserStorage=JSON.parse(localStorage.getItem("getUserStorage") as any);
	const dataRolUser=JSON.parse(sessionStorage.getItem("dataRolUser") as any)
	const dataMenuUser=JSON.parse(sessionStorage.getItem("dataMenuUser") as any);
   
	//Hook useRef
	const menu = useRef<any>(null);

	//Varaibles Generales
	const navigate = useNavigate();

	//Gestor estados Redux
    const dispatch = useDispatch();
	const { navegacion }:any= useSelector<RootState>( (state) => state.actionShared);

	// Hook Graphql
    const [ setAuthlogoutLazyQuery ] = useAuthlogoutLazyQuery();

	//BreadCrumbs
	const breadcrumbs = useBreadcrumbs(); 
	const rowLen=breadcrumbs.length;
	const home: MenuItem = { icon: 'pi pi-home text-white', url: '/app/seguridades' }

	const itemsBread: MenuItem[] = breadcrumbs.flatMap((match:any,i:any) => {
       
        return {
            ...(rowLen === i + 1)?{
                label:(match.breadcrumb.props.children).toLowerCase() ,
                className:'text-xs font-bold',   
                command:()=>{
                    navigate(match.key);
                }            
            }:{
                label:match.breadcrumb.props.children,
                className:'text-xs',   
            }                     
        };
    });

	const itemRenderer = (item:any) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link hover:text-primary">
                <span className={item.icon} />
                <span className="mx-2 ">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );

	const items: any = [	
        {
            label: getUserStorage?.email,
            icon: 'pi pi-book',
			className:'text-sm text-red-500',
			template: itemRenderer
        },
		{
			separator:true
		},
		{
			label: 'Aplicaciones',
			icon: 'pi pi-th-large',
			className:'text-sm',
			template: itemRenderer,
			command:()=>{
				navigate("/app/seguridades");			
			}
		},
		{
			label: 'Mensajes',
			icon: 'pi pi-inbox',
			className:'text-sm',
			badge: 4,
			template: itemRenderer
		},
		{
			label: 'Rol Usuario',
			icon: 'pi pi-shield',
			className:'text-sm',
			template: itemRenderer,
			command:()=>{
				setVisibleModalAux({active:true,header:'Rol Usuario',closable:false,maximizable:true});				
			}
		},
		{
			label: 'Establecimiento',
			icon: 'pi pi-building',
			className:'text-sm',
			template: itemRenderer
		},
	
        {
			separator:true
		},
		{
			label: 'Salir',
			icon: 'pi pi-sign-out',
			className:'font-semibold text-sm ',
			template: itemRenderer,
			command: () => {               				
				processAuthLogout({dispatch,setAuthlogoutLazyQuery,navigate,toast});
            },
		},
    ];


    
	
	const startContent=(
		<div className='flex gap-1'>
			<Button  
				icon="pi pi-align-left" text severity="secondary" size="large"  className='inline-block lg:hidden  p-1'
				tooltip="Abrir Menu" tooltipOptions={{position: 'bottom'}} 
				onClick={() => dispatch(setNavegacion({open:true}))}
				pt={{label:{className:'text-sm text-gray-600'},root:{className:'p-1'}}}
			/>
			<Button  
				text severity="secondary" size="large"  className='p-1 hidden lg:inline-block cursor-text'											
				label ={`${(dataMenuUser)?'Modulo | ' + dataMenuUser?.modulo:''}`}
				pt={{label:{className:'text-sm text-gray-600'},root:{className:'p-1'}}}
			/>
		</div>
	);

	const endContent = (
        <>
			<TieredMenu model={items} popup ref={menu} breakpoint="800px" pt={{menu:{className:'w-20rem '},root:{className:'w-20rem'},label:{className:'text-gray-800'}}}/>
			<div className='flex flex-column'>
				<Button label={getUserStorage?.nombres} badgeClassName="p-badge-info"  iconPos='right' severity="secondary" size='small' icon="pi pi-bars text-gray-800 text-"  
				pt={{label:{className:'text-primary text-sm'},root:{className:'p-1'}}}
				text className="mr-2" onClick={(event:any) => menu?.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
				<div className="flex align-items-center text-gray-600 justify-content-end  font-bold border-round text-sm mr-3">{dataRolUser?.nombre}</div>
			</div>
        </>
    );


	return (
		<>					
			<div className='flex flex-column fixed mt-6 bg-white w-full  h-3rem opacity-90 z-5 border-bottom-1 border-bluegray-100'>
				<Toolbar start={startContent}  end={endContent} className="border-noround shadow-none fixed w-full h-4rem left-0 top-0 pt-0 pr-5 pb-0 pl-5 border-none" style={{zIndex:'997',backgroundImage:`url(${header})`}}/>
				<div className='flex flex-row-reverse flex-wrap  '> 
					<BreadCrumb model={itemsBread} home={home} className='border-noround w-full mt-2 flex align-items-center justify-content-end bg-primary-500'  pt={{
                          
                          separatorIcon: ({ props } :any) => ({
                                className:  'w-7 h-7 text-white '
                            }),
                            label:()=>({
                                className:'text-white text-xs font-semibold '
                            })
                        }}
					/>
				</div>
			</div>
			<SidebarLayout active={navegacion.open} setActive={setNavegacion} path={path}></SidebarLayout>
		</>
		
	)
}

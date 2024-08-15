import { useRef } from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { TieredMenu } from 'primereact/tieredmenu';
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
import Icon from '@mui/material/Icon';

export const Header = ({setVisibleModalAux,path,toast,setVisibleModalPass}:{setVisibleModalAux:any,path:string,toast:any,setVisibleModalPass:any}) => {
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
	const home: MenuItem = { icon: <Icon className='text-gray-500 font-bold' fontSize='small'>home</Icon>, url: '/app/seguridades' }

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
					{item.icon}
                <span className="mx-2 ">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );

	const items: any = [	
		{
			label:getUserStorage?.username,
			icon:<Icon >account_box</Icon>,
			className:'font-semibold text-sm',
			template: itemRenderer,
		}
        ,
		{
			separator:true
		},
		{
			label: 'Mensajes',
			icon: <Icon >inbox</Icon>,
			className:'font-semibold text-sm',
			badge: 4,
			template: itemRenderer
		},
		{
			label: 'Rol Usuario',
			icon: <Icon >admin_panel_settings</Icon>,
			className:'font-semibold text-sm',
			template: itemRenderer,
			command:()=>{
				setVisibleModalAux({active:true,header:'Rol Usuario',closable:false,maximizable:true});				
			}
		},		
		{
			label: 'Password',
			icon: <Icon >password</Icon>,
			className:'font-semibold text-sm',
			template: itemRenderer,
			command:()=>{
				setVisibleModalPass({active:true,header:'Cambiar Password',closable:false,maximizable:true});				
			}
		},
		{
			label: 'Establecimiento',
			icon:<Icon >domain</Icon>,
			className:'font-semibold text-sm',
			template: itemRenderer
		},
	
        {
			separator:true
		},
		{
			label: 'Aplicaciones',
			icon: <Icon >widgets</Icon>,
			className:'font-semibold text-sm',
			template: itemRenderer,
			command:()=>{
				navigate("/app/seguridades");			
			}
		},
		{
			separator:true
		},
		{
			label: 'Salir',
			icon: <Icon >exit_to_app</Icon>,
			className:'font-semibold text-sm text-gray-800',
			template: itemRenderer,
			command: () => {               				
				processAuthLogout({dispatch,setAuthlogoutLazyQuery,navigate,toast});
            },
		},
    ];


    
	
	const startContent=(
		<div className='flex gap-1'>
			<Button  
				icon="pi pi-align-left" text severity="secondary" size="large"  className='inline-block lg:hidden  text-white p-1'
				tooltip="Abrir Menu" tooltipOptions={{position: 'bottom'}} 
				onClick={() => dispatch(setNavegacion({open:true}))}
				pt={{label:{className:'text-sm text-white'},root:{className:'p-1'}}}
			/>
			<Button  
				text severity="secondary" size="large"  className='p-1 hidden lg:inline-block cursor-text uppercase'											
				label ={`${(dataMenuUser)?'Modulo | ' + dataMenuUser?.modulo:''}`}
				pt={{label:{className:'text-xs text-white'},root:{className:'p-1'}}}
			/>
		</div>
	);

	const endContent = (
        <>	
			<TieredMenu model={items} popup ref={menu} breakpoint="800px" pt={{menu:{className:'w-20rem '},root:{className:'w-20rem'},label:{className:'text-gray-800'}}}/>
			<div className='flex flex-column'>
				<Button label={getUserStorage?.nombres} badgeClassName="p-badge-info"  iconPos='right' severity="secondary" size='small' icon="pi pi-bars text-white "  
				pt={{label:{className:'text-white text-sm '},root:{className:'p-1'}}}
				text className="mr-2" onClick={(event:any) => menu?.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
				<div className="flex align-items-center text-white justify-content-end  font-bold border-round text-xs uppercase mr-3">{dataRolUser?.nombre}</div>
			</div>
        </>
    );


	return (
		<>					
			<div className='flex flex-column fixed mt-7 bg-white w-full  h-3rem opacity-90 z-5 border-bottom-1 border-bluegray-100'>
				<Toolbar start={startContent}  end={endContent} className="bg-primary-500 border-noround shadow-none fixed w-full h-4rem left-0 top-0 pt-0 pr-5 pb-0 pl-5 border-none" 
				/>
				<div className='flex flex-row-reverse flex-wrap  '> 
					<BreadCrumb model={itemsBread} home={home} className='bg-primary-50 border-noround w-full mt-0 flex align-items-center justify-content-end ' 
					style={{zIndex:'997'}} pt={{
                          
                          separatorIcon: ({ props } :any) => ({
                                className:  'w-7 h-7 '
                            }),
                            label:()=>({
                                className:'text-xs font-bold '
                            })
                        }}
					/>
				</div>
			</div>
			<SidebarLayout active={navegacion.open} setActive={setNavegacion} path={path}></SidebarLayout>
		</>
		
	)
}

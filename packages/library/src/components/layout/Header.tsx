import { useRef,useState } from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { TieredMenu } from 'primereact/tieredmenu';
import header from "@public/images/header.png";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import {SidebarLayout} from '@components/layout/SidebarLayout'
import { resetAction,setDataUser,setNavegacion } from '@store/slices/';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = () => {

	//Hook useRef
	const menu = useRef<any>(null);

	//Hook useState
	const [visible, setVisible] = useState(false);

	//Gestor estados Redux
	const dispatch = useDispatch()

	//Varaibles Generales
	const navigate = useNavigate();

	const itemRenderer = (item:any) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );

	const items: any = [	
        {
            label: 'juan.guanolema@gmail.com',
            icon: 'pi pi-envelope',
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
			template: itemRenderer
		},
		{
			label: 'Notificaciones',
			icon: 'pi pi-bell',
			className:'text-sm',
			badge: 4,
			template: itemRenderer
		},
		{
			label: 'Rol Usuario',
			icon: 'pi pi-shield',
			className:'text-sm',
			template: itemRenderer
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
			className:'font-semibold text-sm',
			template: itemRenderer,
			command: () => {               				
				navigate("/app/home");
                localStorage.clear();
                sessionStorage.clear();
            },
		},
    ];


	const itemsB: MenuItem[] = [{ label: 'Home' }, { label: 'App' }, { label: 'Administración' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' }
	
	const startContent=(
		<div className='flex gap-1'>
			<Button  
				icon="pi pi-align-left" text severity="secondary" size="large"  className='xl:hidden p-2'
				tooltip="Abrir Menu" tooltipOptions={{position: 'bottom'}} 
				onClick={() => setVisible(true)}	
			/>
		</div>
	);

	const endContent = (
        <>
			<TieredMenu model={items} popup ref={menu} breakpoint="800px" pt={{menu:{className:'w-20rem'},root:{className:'w-20rem'},label:{className:'text-gray-800'}}}/>
			<Button label="Juan Guanolema" badgeClassName="p-badge-info"  iconPos='right' severity="secondary" size='small' icon="pi pi-bars text-gray-800 text-"  
			pt={{label:{className:'text-gray-600 font-medium text-sm'}}}
			text className="mr-2 text-gray-600" onClick={(event:any) => menu?.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
        </>
    );


	return (
		<>					
			<div className='flex flex-column fixed mt-6 bg-white w-full  h-3rem opacity-90 z-5 border-bottom-1 border-bluegray-100 '>
				<Toolbar start={startContent}  end={endContent} className="shadow-none fixed w-full h-4rem left-0 top-0 pt-0 pr-5 pb-0 pl-5 border-none" style={{zIndex:'997',backgroundImage:`url(${header})`}}/>
				<div className='flex flex-row-reverse flex-wrap '> 
					<BreadCrumb model={itemsB} home={home} className='w-full mt-2 flex align-items-center justify-content-end'  pt={{
                          
                          separatorIcon: ({ props } :any) => ({
                                className:  'w-7 h-7 text-gray-400'
                            }),
                            label:()=>({
                                className:'text-gray-600 text-xs font-semibold'
                            })
                        }}
					/>
				</div>
			</div>
			<SidebarLayout active={visible} setActive={setVisible}></SidebarLayout>
		</>
		
	)
}

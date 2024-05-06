import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { classNames } from 'primereact/utils';
import { useRef } from 'react';
export const Sidebar = () => {

   
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

    const toast = useRef<Toast>(null);

    let items = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#4fc3f7" d="M44.945,21.453L26.547,3.055c-1.404-1.404-3.689-1.404-5.094,0L3.055,21.453	c-1.404,1.404-1.404,3.689,0,5.094l18.398,18.398c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053l18.398-18.398	C46.349,25.143,46.349,22.857,44.945,21.453z M24,29l-5-5l5-5l5,5L24,29z">
                            </path>
                            <path fill="#2979ff" d="M33.246,9.754L24,19l5,5l-5,5l9.246,9.246l11.699-11.699c1.404-1.404,1.404-3.689,0-5.094	L33.246,9.754z">
                            </path>
                            <path fill="#2962ff" d="M14.754,38.246l6.699,6.699c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053	l6.699-6.699L24,29L14.754,38.246z">    
                            </path>
                        </svg>
                        <span className="font-medium text-sm">
                        Blockchain voting System<span className="text-primary"> Menu </span>
                        </span>
                    </span>
                );
            }
        },
        {
            separator: true
        },
        {
            label: 'Seguridades',
            items: [
                {
                    label: 'Usuarios',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Roles',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Parametrización',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
        {
            separator: true
        },
       
    ];

    return (
        
            <Menu model={items} className="w-19rem p-4 border-none"  pt={{menuitem:{'className':'text-sm '},submenuHeader:{'className':''}}}/>
       
    )
}

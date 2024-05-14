import { useState } from 'react'
import { formLogin } from '@components/forms/';
import { FormLayoutInit } from "@components/forms/FormLayout"
import { TextInput} from "@components/forms/FormInput"
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthloginLazyQuery} from "@infrastructure/graphql/__generated__/graphql-types";
import { onClikSaveAuth } from '@components/service/authservice';
import { UtilsMessages } from '@components/partials/Utils'
import { useSelector } from "react-redux";
import { RootState } from '@store/store';

export const LoginLayout = () => {

    //Form Hook
	const methods = formLogin();

    // Hook Graphql
    const [ setAuthloginLazyQuery,{loading}] = useAuthloginLazyQuery();

    //Hook UseState    
    const [ labels, setLabels ] = useState<{ btn1: string, btn2: string, icon: boolean, btnload: boolean }>({ btn1: '', btn2: 'Ingresar', icon: true, btnload: false });

    //Gestor estados Redux
    const { etiquetas }:any= useSelector<RootState>( (state) => state.actionShared);

    //Varaibles Generales
	const navigate = useNavigate();
    const dataEnv:any =process;

    //Gestor estados Redux
    const dispatch = useDispatch()

    //Function Formulario
    const onSubmitLogin: SubmitHandler<any> = (data:any,e)=>{        
        onClikSaveAuth({dataForm:data,dispatch,setAuthloginLazyQuery,navigate});
    }

    return (
        <>        
            <FormLayoutInit methods={methods} onSubmit={onSubmitLogin} labels={labels} onReset={()=>{}}  visibleModal={false}>            
                
                <div className="flex justify-content-end">                 
                {(dataEnv?.NODE_ENV !='prod')&&<h3 className='flex justify-content-center text-red-500 mb-2'>{dataEnv?.FRONT_ETIQUETA}</h3>}
                </div>
                <div className="flex justify-content-end mt-1">
                    <h3 className='text-gray-600 m-0'>Blockchain Voting System   
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                        <path fill="#4fc3f7" d="M44.945,21.453L26.547,3.055c-1.404-1.404-3.689-1.404-5.094,0L3.055,21.453 c-1.404,1.404-1.404,3.689,0,5.094l18.398,18.398c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053l18.398-18.398	C46.349,25.143,46.349,22.857,44.945,21.453z M24,29l-5-5l5-5l5,5L24,29z">
                        </path>
                        <path fill="#2979ff" d="M33.246,9.754L24,19l5,5l-5,5l9.246,9.246l11.699-11.699c1.404-1.404,1.404-3.689,0-5.094	L33.246,9.754z">
                        </path>
                        <path fill="#2962ff" d="M14.754,38.246l6.699,6.699c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053	l6.699-6.699L24,29L14.754,38.246z">    
                        </path>
                        </svg>
                    </h3>
                </div>
                <div className=" font-bold line-height-3 text-right mb-7 text-base text-gray-500">
                    Usuarios <span className='text-primary font-semibold'> | BSM</span>
                </div>
                
                <div className='mb-6'>
                    <TextInput label='Usuario *' name='username_login' placeholder="" methods={methods} keyfilter='alphanum' maxLength={20}
                    />
                </div>
                <div className='mb-7 w-full'>
                    <TextInput label='Contraseña *' name='contrasenia_login'  methods={methods} optInput='P'  toggleMask />
                </div>
                {(etiquetas.atributo)&& 
                    <div className='mb-4'>
                        <UtilsMessages data={[{sticky: true, severity: 'error', summary: 'Error', detail: etiquetas.mensaje,closable:false}]}></UtilsMessages>
                    </div>
                }
            </FormLayoutInit>
            
        </>
    )
}

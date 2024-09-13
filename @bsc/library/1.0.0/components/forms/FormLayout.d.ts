import { Dispatch } from "react";
interface IFormValues {
    children: string | JSX.Element | JSX.Element[] | any;
    methods: any;
    onSubmit: any;
    labels: {
        btn1: string;
        btn2: string;
        btn3?: string;
        btn4?: string;
        icon: boolean;
        btnload: boolean;
    };
    onReset: any;
    setVisible?: any;
    visible?: any;
    toast?: any;
}
export declare const FormLayout: ({ children, methods, onSubmit, labels, opt, onReset, visibleModal, setVisibleModal, width }: {
    children: string | JSX.Element | JSX.Element[];
    methods: any;
    onSubmit: any;
    labels: {
        btn1: string;
        btn2: string;
        btn3?: string;
        btn4?: string;
        icon: boolean;
        btnload: boolean;
    };
    opt?: string | undefined;
    onReset: any;
    visibleModal: any;
    setVisibleModal?: Dispatch<any> | undefined;
    width?: any;
}) => JSX.Element;
export declare const FormLayoutInit: ({ children, methods, onSubmit, labels, onReset }: IFormValues) => JSX.Element;
export declare const FormCore: ({ children, methods, onSubmit, labels, onReset, setVisible, visible, toast }: IFormValues) => JSX.Element;
export {};

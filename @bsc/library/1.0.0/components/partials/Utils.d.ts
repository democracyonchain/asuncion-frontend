import { Dispatch } from 'react';
export declare const UtilsButton: ({ label, type, link, icon, loading, onClick, severity, disabled, raised, rounded, text, outlined, ariaLabel, badge, badgeClassName, size, className, autoFocus }: {
    label: string | undefined;
    type?: any;
    link?: boolean | undefined;
    icon?: any;
    loading?: boolean | undefined;
    onClick?: any;
    severity?: any;
    disabled?: boolean | undefined;
    raised?: boolean | undefined;
    rounded?: boolean | undefined;
    text?: boolean | undefined;
    outlined?: boolean | undefined;
    ariaLabel?: any;
    badge?: any;
    badgeClassName?: any;
    size?: any;
    className?: any;
    autoFocus?: boolean | undefined;
}) => JSX.Element;
export declare const UtilsAccordion: ({ data, active, onClick }: {
    data: [{
        header: any;
        children: any;
        disabled: boolean;
    }];
    active: number;
    onClick: () => {};
}) => JSX.Element;
export declare const UtilsFieldset: ({ data, legend, toggleable }: {
    data: any;
    legend: string | null | JSX.Element | JSX.Element[];
    toggleable: boolean;
}) => JSX.Element;
export declare const UtilsDivider: ({ type, align, content, layout }: {
    type: any;
    align: any;
    content: string | null | JSX.Element | JSX.Element[];
    layout: any;
}) => JSX.Element;
export declare const UtilsScrollPanel: ({ content, style, className }: {
    content: string | null | JSX.Element | JSX.Element[];
    style: {};
    className: any;
}) => JSX.Element;
export declare const UtilsTabs: ({ data, scrollable, active, onClick }: {
    data: [
        {
            header: string | null | JSX.Element | JSX.Element[];
            content: string | null | JSX.Element | JSX.Element[];
            disabled?: boolean;
            leftIcon?: any;
            rightIcon?: any;
        }
    ];
    scrollable: boolean;
    active: number;
    onClick: () => {};
}) => JSX.Element;
export declare const UtilsCard: ({ title, subTitle, footer, header, className, content }: {
    title: string;
    subTitle: string;
    footer: string | null | JSX.Element | JSX.Element[];
    header: string | null | JSX.Element | JSX.Element[];
    className: string;
    content: string | null | JSX.Element | JSX.Element[];
}) => JSX.Element;
export declare const UtilsPanel: ({ headerTemplate, footerTemplate, toggleable, children, header, className, }: {
    headerTemplate: string | null | JSX.Element | JSX.Element[];
    footerTemplate: string | null | JSX.Element | JSX.Element[];
    toggleable: boolean;
    children: string | null | JSX.Element | JSX.Element[];
    header: string | null | JSX.Element | JSX.Element[];
    className: string;
}) => JSX.Element;
export declare const UtilsConfirm: ({ setVisible, visible, accept, reject, message, header, icon, opt }: {
    setVisible: Dispatch<any>;
    visible: boolean;
    accept: () => {};
    reject: () => {};
    message: string;
    header?: string | undefined;
    icon?: string | undefined;
    opt?: number | undefined;
}) => JSX.Element;
export declare const UtilsModal: ({ setVisible, visible, headerElement, footerContent, contenido, maximizable, closable, closeOnEscape, position, width }: {
    setVisible: any;
    visible: boolean;
    headerElement?: string | JSX.Element | JSX.Element[] | null | undefined;
    footerContent?: string | JSX.Element | JSX.Element[] | null | undefined;
    contenido?: string | null | JSX.Element | JSX.Element[] | any;
    maximizable?: boolean | undefined;
    closable?: boolean | undefined;
    closeOnEscape?: boolean | undefined;
    position?: any;
    width?: any;
}) => JSX.Element;
export declare const UtilsSpinner: ({ visible }: {
    visible: boolean;
}) => JSX.Element;
export declare const UtilsMessages: ({ data }: {
    data: [{
        sticky?: any;
        severity: any;
        summary: string;
        detail: string;
        closable?: boolean;
    }];
}) => JSX.Element;
export declare const Utils404: ({ path }: {
    path: string;
}) => JSX.Element;

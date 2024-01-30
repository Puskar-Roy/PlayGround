export interface FileUploadProps{
    onChange : (url?: string)=>void;
    value : string;
    endpoint : 'messageFile' | 'serverImage'

}

export interface ActionTooltipProps{
    lable:string;
    children:React.ReactNode;
    side?:"top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}
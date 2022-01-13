export interface IModel {
    _id: string;
    value: string;
    name: string;    
    doorThicks: number[];
    typeOutside: string;
    typeInside: string;
    isTermo: boolean;
    isDouble: boolean;
    isPena: boolean;
    isInside: boolean;
}
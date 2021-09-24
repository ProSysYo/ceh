export interface IModel {
    _id: string;
    value: string;
    name: string;
    contours: number[];
    doorThicks: number[];
    typeOutside: string;
    typeInside: string;
    isTermo: boolean;
}
export interface IOrder {
    _id?: string;
    customer: string;
    number?: string;
    numberCustomer: string;
    party: string;
    model: string;
    contour: number | string;
    doorThick: number | string;
    height: number | string;
    width: number | string;
    modelBox: string;
    openingType: string;
    isDouble: boolean;
    widthDouble: number | string;
    baseLock: string
}
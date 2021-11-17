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
    locationHinge: string; //Расположение петель
    isThreeHinge: boolean; //Три петли
    typeHinge: string;
    baseLock: string;    
    lockSpinner: string;
    baseCylinder: string;

    baseCoverOutside: string;
    baseCoverColorOutside: string;
    baseCoverInside: string;
    baseCoverColorInside: string;

    baseCoverOutside2: string;
    baseCoverColorOutside2: string;
    baseCoverInside2: string;
    baseCoverColorInside2: string;

    optionalLock: string;
    optionalCylinder: string;
    optionalCoverOutside: string,
    optionalCoverColorOutside: string,
    optionalCoverInside: string,
    optionalCoverColorInside: string,

    eye: string;
    colorEye: string;
    eyeLocation: string;

    handle: string;
    spinner: string;
    typeDecorationOutside: string;    
    decorationOutside: string;
    wrapOutside: string;
    wrapInside: string;
    patinaOutside: string;
    patinaInside: string;
    typeDecorationInside: string;
    decorationInside: string;
    typeWindow: string;
    doorWindow: string;
    colorTint: string;
    colorForge: string;
    patinaForge: string;
    heightWindow: number | string;
    widthWindow: number | string;
    thickWindow: number | string;
    countDoors: number;
    costDoor: number;
    note: string;
    thickMetalLeaf: number | string ;
    thickMetalBox: number | string ;
    jamb: string;
    jambWrap: string;
    locationJumb: string;
    isStainlessDoorStep: boolean //порог из нержавейки
    isStreetDoor: boolean;
    isEccentric: boolean;
    isBackSheet: boolean;
    isCloser: boolean; //доводчик
    isEnhanceCloser: boolean; //Училение под доводчик
}
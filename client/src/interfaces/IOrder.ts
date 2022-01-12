export interface IOrderStr {    
    customer: string;    
    numberCustomer: string;
    party: string;    
    model: string;
    modelBox: string;
    locationHinge: string; //Расположение петель
    typeHinge: string;

    //Основной замок
    baseLock: string;    
    lockSpinner: string;//Вертушок замка
    lockSpinnerColor: string;
    baseCylinder: string;

    //Накладки основного замка
    baseCoverOutside: string;
    baseCoverColorOutside: string;
    baseCoverInside: string;
    baseCoverColorInside: string;
    //Накладки основного замка 2
    baseCoverOutside2: string;
    baseCoverColorOutside2: string;
    baseCoverInside2: string;
    baseCoverColorInside2: string;

    //Дополнительный замок
    optionalLock: string;
    optionalCylinder: string;

    //Накладки дополнительного замка
    optionalCoverOutside: string,
    optionalCoverColorOutside: string,
    optionalCoverInside: string,
    optionalCoverColorInside: string,

    //Глазок
    eye: string;
    colorEye: string;
    eyeLocation: string;

    //Ручка
    handle: string;
    handleColor: string;

    //Вертушок
    spinner: string;
    spinnerColor: string;

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
    note: string;
    jamb: string;
    jambWrap: string;
    locationJumb: string;

    sealer: string;//Уплотнитель
}

export interface IOrderNum {
    id?: number;
    doorThick?: number;
    height?: number;
    width?: number;    
    widthDouble?: number;    
    countHinge?: number;
    heightWindow?: number;
    widthWindow?: number;
    thickWindow?: number;
    countDoors?: number;
    costDoor?: number;    
    thickMetalLeaf?: number;
    thickMetalBox?: number;
    number?: number;
}

export interface IOrderBool {
    isStainlessDoorStep: boolean;
    isStreetDoor: boolean;
    isEccentric: boolean;
    isBackSheet: boolean;
    isCloser: boolean;
    isEnhanceCloser: boolean;
    isTermoCable: boolean;
    isElectromagnet: boolean;
    isIllumination: boolean;
}

export interface IOrder extends IOrderStr, IOrderNum, IOrderBool{
    dateCreate: Date | undefined;
}
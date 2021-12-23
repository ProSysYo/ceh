export interface IOrderStr {
    _id: string;
    customer: string;
    number: string;
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
    doorThick: number | undefined;
    height: number | undefined;
    width: number | undefined;    
    widthDouble: number | undefined;    
    countHinge: number| undefined;//Количество петель 
    heightWindow: number | undefined;
    widthWindow: number | undefined;
    thickWindow: number | undefined;
    countDoors: number | undefined;
    costDoor: number | undefined;    
    thickMetalLeaf: number | undefined;
    thickMetalBox: number | undefined;
}

export interface IOrderBool {
    isStainlessDoorStep: boolean //порог из нержавейки
    isStreetDoor: boolean;
    isEccentric: boolean;
    isBackSheet: boolean;
    isCloser: boolean; //доводчик
    isEnhanceCloser: boolean; //Училение под доводчик
    isTermoCable: boolean; //Термокабель
    isElectromagnet: boolean; //Электромагнит
    isIllumination: boolean; //Подсветка
}

export interface IOrder extends IOrderStr, IOrderNum, IOrderBool{
    dateCreate: Date | undefined;
}
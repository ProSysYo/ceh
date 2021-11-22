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
    countHinge: number|string;//Количество петель
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
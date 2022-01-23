export interface IOrderStr {    
    customer: string; //Код заказчика    
    numberCustomer: string; //Номер заказчика
    manager: string; //Менеджер
    party: string; //Партийность    
    model: string; //Модель
    modelBox: string; //Модель короба

    locationHinge: string; //Расположение петель
    typeHinge: string; //Тип петель
    
    baseLock: string; //Основной замок  
    lockSpinner: string; //Вертушок замка
    lockSpinnerColor: string; //Вертушок замка цвет
    baseCylinder: string; //Основной замок цилиндр

    
    baseCoverOutside: string; //Накладки основного замка снаружи
    baseCoverColorOutside: string; //Накладки основного замка снаружи цвет
    baseCoverInside: string; //Накладки основного замка внутри
    baseCoverColorInside: string; //Накладки основного замка внутри цвет
    
    baseCoverOutside2: string; //Накладки основного замка 2 снаружи
    baseCoverColorOutside2: string; //Накладки основного замка 2 внунтри цвет
    baseCoverInside2: string; //Накладки основного замка 2 внутри
    baseCoverColorInside2: string; //Накладки основного замка 2 внутри цвет
    
    optionalLock: string; //Дополнительный замок
    optionalCylinder: string; //Дополнительный замок цилиндр
    
    optionalCoverOutside: string, //Накладки дополнительного замка снаружи
    optionalCoverColorOutside: string, //Накладки дополнительного замка снаружи цвет
    optionalCoverInside: string, //Накладки дополнительного замка внутри
    optionalCoverColorInside: string, //Накладки дополнительного замка внутри цвет
    
    eye: string; //Глазок
    colorEye: string; //Глазок цвет
    eyeLocation: string; //Глазок расположение

    handle: string; //Ручка
    handleColor: string; //Ручка цвет
   
    spinner: string;  //Вертушок
    spinnerColor: string;  //Вертушок цвет

    typeDecorationOutside: string; //Тип отделки снаружи   
    decorationOutside: string; //Отделка снаружи
    wrapOutside: string; //Пленка снаружи цвет    
    patinaOutside: string; //Патина снаружи цвет
    
    typeDecorationInside: string; //Тип отделки внутри
    decorationInside: string; //Отделка внутри
    wrapInside: string; //Пленка снаружи цвет
    patinaInside: string; //Патина снаружи цвет
    
    typeWindow: string; //Тип окна
    doorWindow: string; //Окно
    colorTint: string; //Тонировка цвет
    colorForge: string; //Ковка цвет
    patinaForge: string; //Патина на ковке цвет

    note: string; //Примечание
    jamb: string; //Наличник
    jambWrap: string; //Наличник цвет пленки
    locationJumb: string; //Расположение наличника для двери внутреннего открывания

    sealer: string; //Уплотнитель
    ear: string; //Уши
    holeInBox: string; //Отверстие в коробе
    colorDoor: string; //Цвет покраски двери
    packaging: string; //Упаковка
    typePolkaLeft: string; //Тип полки слева
    typePolkaRight: string; //Тип полки справа
    executionFramuga: string; //Исполнение фрамуги
    typeFramuga: string; //Тип фрамуги
}

export interface IOrderNum {
    id?: number; //id записи в базе
    number?: number; //Номер заказа

    doorThick?: number; //Толщина двери

    height?: number; //Высота двери
    width?: number; //Ширина двери  

    widthDouble?: number; //Ширина доп створки   
    countHinge?: number; //Количество петель

    heightWindow?: number; //Окно высота
    widthWindow?: number; //Окно ширина
    thickWindow?: number; //Окно толщина

    countDoors?: number; //Количество дверей
    costDoor?: number; //Стоимость одной двери

    thickMetalLeaf?: number; //Толщина металла полотна
    thickMetalBox?: number; //Толщина металла короба    
}

export interface IOrderBool {
    isStainlessDoorStep: boolean; //Порог из нержавейки    
    isEccentric: boolean; //Эксцентрик
    isBackSheet: boolean; //Задний лист
    isCloser: boolean; //Доводчик
    isEnhanceCloser: boolean; //Усиление под доводчик
    isTermoCable: boolean; //Термокабель
    isElectromagnet: boolean; //Электромагнит
    isIllumination: boolean; //Подсветка
    isNoise: boolean; //Шумоизоляция
    isForgePolkaLeft: boolean; //Ковка на полке слева
    isGlassPolkaLeft: boolean; //Стеклопакет на полке слева
    isForgePolkaRight: boolean; //Ковка на полке справа
    isGlassPolkaRight: boolean; //Стеклопакет на полке справа
    isForgeFramuga: boolean; //Ковка на фрамуге
    isGlassFramuga: boolean; //Стеклопакет на фрамуге
} 

export interface IOrder extends IOrderStr, IOrderNum, IOrderBool{
    dateCreate: Date | undefined;
}
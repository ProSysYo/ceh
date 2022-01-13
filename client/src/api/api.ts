import { IModel } from '../../../interfaces/IModel';
import { ILock } from '../../../interfaces/ILock';
import { ISpinner } from '../../../interfaces/ISpinner';
import { ICylinder } from '../../../interfaces/ICylinder';
import { ICover } from '../../../interfaces/ICover';
import { IEye } from '../../../interfaces/IEye';
import { IHandle } from '../../../interfaces/IHandle';
import { ITypeDecoration } from '../../../interfaces/ITypeDecoration';
import { IDecoration } from '../../../interfaces/IDecoration';
import { IWrap } from '../../../interfaces/IWrap';
import { IPatina } from '../../../interfaces/IPatina';
import { ITypeWindow } from '../../../interfaces/ITypeWindow';
import { IWindow } from '../../../interfaces/IWindow';
import { IColorTint } from '../../../interfaces/IColorTint';
import { IColorForge } from '../../../interfaces/IColorForge';
import { IPatinaForge } from '../../../interfaces/IPatinaForge';
import { ILocationHinge } from '../../../interfaces/ILoacationHinge';
import { ITypeHinge } from '../../../interfaces/ITypeHinge';
import { IThickMetal } from '../../../interfaces/IThickMetal';
import { IModelBox } from '../../../interfaces/IModelBox';
import { IParty } from '../../../interfaces/IParty';

import { IEyeLocation } from '../../../interfaces/IEyeLocation';
import { IJamb } from '../../../interfaces/IJamb';
import { ILocationJamb } from '../../../interfaces/ILocationJamb';
import { IOrder } from '../../../interfaces/IOrder';
import { http } from '../commons/http';
import { IFittingColor } from '../../../interfaces/IFittingColor';
import { IHingeCount } from '../../../interfaces/IHingeCount';
import { ISealer } from '../../../interfaces/ISealer';
import { IEar } from '../../../interfaces/IEar';
import { IHoleInBox } from '../../../interfaces/IHoleInBox';
import { ICustomer } from '../../../interfaces/ICustomer';
import { IColorDoor } from '../../../interfaces/IColorDoor';
import { IPackaging } from '../../../interfaces/IPackaging';

const customers: ICustomer[] = [
    { _id: "1", value: "D001", name: "Бункер" },
    { _id: "2", value: "D002", name: "Ижевск" },
    { _id: "3", value: "D003", name: "Лабиринт" },
    { _id: "4", value: "D004", name: "Красноярск" },
];

const parties: IParty[] = [
    { _id: "1", value: "заказная", name: "заказная" },
    { _id: "2", value: "партия", name: "партия" },
    { _id: "3", value: "партия-1", name: "партия-1" },
    { _id: "4", value: "партия-2", name: "партия-2" },
    { _id: "5", value: "партия-3", name: "партия-3" },
];

const models: IModel[] = [
    { _id: "1", value: "ММ2", name: "ММ2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: false, isInside: false, isPena: false},
    { _id: "2", value: "ММ3", name: "ММ3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: false, isInside: false,  isPena: false},
    { _id: "3", value: "МП2", name: "МП2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: false},
    { _id: "4", value: "МП3", name: "МП3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: false},
    { _id: "5", value: "ПП2", name: "ПП2", doorThicks: [60, 70, 80, 90], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: false},
    { _id: "6", value: "ПП3", name: "ПП3", doorThicks: [80, 90, 100], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: false},

    { _id: "7", value: "ММ_Пена2", name: "ММ_Пена2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: false, isInside: false, isPena: true},
    { _id: "8", value: "ММ_Пена3", name: "ММ_Пена3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: false, isInside: false, isPena: true},
    { _id: "9", value: "МП_Пена2", name: "МП_Пена2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: true},
    { _id: "10", value: "МП_Пена3", name: "МП_Пена3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: true},
    { _id: "11", value: "ПП_Пена2", name: "ПП_Пена2", doorThicks: [60, 70, 80, 90], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: true},
    { _id: "12", value: "ПП_Пена3", name: "ПП_Пена3", doorThicks: [80, 90, 100], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: false, isInside: false, isPena: true},    

    { _id: "13", value: "ММТ2", name: "ММТ2", doorThicks: [100], typeOutside: "металл", typeInside: "металл", isTermo: true, isDouble: false, isInside: false, isPena: false},
    { _id: "14", value: "ММТ3", name: "ММТ3", doorThicks: [100], typeOutside: "металл", typeInside: "металл", isTermo: true, isDouble: false, isInside: false, isPena: false},
    { _id: "15", value: "МПТ2", name: "МПТ2", doorThicks: [100], typeOutside: "металл", typeInside: "панель", isTermo: true, isDouble: false, isInside: false, isPena: false},
    { _id: "16", value: "МПТ3", name: "МПТ3", doorThicks: [100], typeOutside: "металл", typeInside: "панель", isTermo: true, isDouble: false, isInside: false, isPena: false},
    { _id: "17", value: "ППТ2", name: "ППТ2", doorThicks: [100], typeOutside: "панель", typeInside: "панель", isTermo: true, isDouble: false, isInside: false, isPena: false},
    { _id: "18", value: "ППТ3", name: "ППТ3", doorThicks: [100], typeOutside: "панель", typeInside: "панель", isTermo: true, isDouble: false, isInside: false, isPena: false},
    
    { _id: "19", value: "ДММ2", name: "ДММ2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: true, isInside: false, isPena: false},
    { _id: "20", value: "ДММ3", name: "ДММ3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: true, isInside: false, isPena: false},
    { _id: "21", value: "ДМП2", name: "ДМП2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: false},
    { _id: "22", value: "ДМП3", name: "ДМП3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: false},
    { _id: "23", value: "ДПП2", name: "ДПП2", doorThicks: [60, 70, 80, 90], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: false},
    { _id: "24", value: "ДПП3", name: "ДПП3", doorThicks: [80, 90, 100], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: false},

    { _id: "25", value: "ДММ_Пена2", name: "ДММ_Пена2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: true, isInside: false, isPena: true},
    { _id: "26", value: "ДММ_Пена3", name: "ДММ_Пена3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: true, isInside: false, isPena: true},
    { _id: "27", value: "ДМП_Пена2", name: "ДМП_Пена2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: true},
    { _id: "28", value: "ДМП_Пена3", name: "ДМП_Пена3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: true},
    { _id: "29", value: "ДПП_Пена2", name: "ДПП_Пена2", doorThicks: [60, 70, 80, 90], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: true},
    { _id: "30", value: "ДПП_Пена3", name: "ДПП_Пена3", doorThicks: [80, 90, 100], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: true, isInside: false, isPena: true},

    { _id: "31", value: "ДММТ2", name: "ДММТ2", doorThicks: [100], typeOutside: "металл", typeInside: "металл", isTermo: true, isDouble: true, isInside: false, isPena: false},
    { _id: "32", value: "ДММТ3", name: "ДММТ3", doorThicks: [100], typeOutside: "металл", typeInside: "металл", isTermo: true, isDouble: true, isInside: false, isPena: false},
    { _id: "33", value: "ДМПТ2", name: "ДМПТ2", doorThicks: [100], typeOutside: "металл", typeInside: "панель", isTermo: true, isDouble: true, isInside: false, isPena: false},
    { _id: "34", value: "ДМПТ3", name: "ДМПТ3", doorThicks: [100], typeOutside: "металл", typeInside: "панель", isTermo: true, isDouble: true, isInside: false, isPena: false},
    { _id: "35", value: "ДППТ2", name: "ДППТ2", doorThicks: [100], typeOutside: "панель", typeInside: "панель", isTermo: true, isDouble: true, isInside: false, isPena: false},
    { _id: "36", value: "ДППТ3", name: "ДППТ3", doorThicks: [100], typeOutside: "панель", typeInside: "панель", isTermo: true, isDouble: true, isInside: false, isPena: false},

    { _id: "37", value: "ММВ2", name: "ММВ2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: false, isInside: true, isPena: false},
    { _id: "38", value: "ММВ3", name: "ММВ3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "металл", isTermo: false, isDouble: false, isInside: true,  isPena: false},
    { _id: "39", value: "МПВ2", name: "МПВ2", doorThicks: [60, 70, 80, 90], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: false, isInside: true, isPena: false},
    { _id: "40", value: "МПВ3", name: "МПВ3", doorThicks: [80, 90, 100], typeOutside: "металл", typeInside: "панель", isTermo: false, isDouble: false, isInside: true, isPena: false},
    { _id: "41", value: "ППВ2", name: "ППВ2", doorThicks: [60, 70, 80, 90], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: false, isInside: true, isPena: false},
    { _id: "42", value: "ППВ3", name: "ППВ3", doorThicks: [80, 90, 100], typeOutside: "панель", typeInside: "панель", isTermo: false, isDouble: false, isInside: true, isPena: false},
];

const modelBoxes: IModelBox[] = [
    { _id: "1", value: "открытая", name: "открытая" },
    { _id: "2", value: "закрытая", name: "закрытая" },    
    { _id: "3", value: "закрытая утепленная", name: "закрытая утепленная" },    
];

const locks: ILock[] = [
    { _id: "1", value: "Г30.11 ОС", name: "Г30.11 ОС", installation: "основной", type: "сувальда", isBolt: false },
    { _id: "2", value: "Г30.15 ОСВ", name: "Г30.15 ОСВ", installation: "основной", type: "сувальда", isBolt: true },
    { _id: "3", value: "Г32.11 ОЦ", name: "Г32.11 ОЦ", installation: "основной", type: "цилиндр", isBolt: false },
    { _id: "4", value: "Г32.15 ОЦВ", name: "Г32.15 ОЦВ", installation: "основной", type: "цилиндр", isBolt: true },
    { _id: "5", value: "Г25.12 ОЦС", name: "Г25.12 ОЦС", installation: "основной", type: "цилиндр-сувальда", isBolt: false },
    { _id: "6", value: "Г25.12 Т ОЦСВ", name: "Г25.12 Т ОЦСВ", installation: "основной", type: "цилиндр-сувальда", isBolt: true },
    { _id: "7", value: "Г75.14 Т ОСЦ", name: "Г75.14 Т ОСЦ", installation: "основной", type: "сувальда-цилиндр", isBolt: false },
    { _id: "8", value: "Г25.14 ОСЦВ", name: "Г25.14 ОСЦВ", installation: "основной", type: "сувальда-цилиндр", isBolt: true },
    { _id: "9", value: "MoliLock U761 ОБ", name: "MoliLock U761 ОБ", installation: "основной", type: "другое", isBolt: false },
    { _id: "10", value: "Меттэм-ЗКП-2 О", name: "Меттэм-ЗКП-2 О", installation: "основной", type: "другое", isBolt: false },
    { _id: "11", value: "Cisa 56.525 ДЦ", name: "Cisa 56.525 ДЦ", installation: "дополнительный", type: "цилиндр", isBolt: false },
    { _id: "12", value: "Г30.11 ДС", name: "Г30.11 ДС", installation: "дополнительный", type: "сувальда", isBolt: false },
    { _id: "13", value: "нет", name: "нет", installation: "нет", type: "нет", isBolt: false },
    { _id: "14", value: "см. прим.", name: "см. прим.", installation: "примечание", type: "примечание", isBolt: true },    
]

const spinners: ISpinner[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "Apecs", name: "Apecs" },
    { _id: "4", value: "Rezident", name: "Rezident" },
    { _id: "5", value: "Fuaro", name: "Fuaro" },
];

const cylinders: ICylinder[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "Kale BN ключ-ключ", name: "Kale BN ключ-ключ" },
    { _id: "3", value: "Securemme K2 ключ-шток", name: "Securemme K2 ключ-шток" },
];

const covers: ICover[] = [
    { _id: "1", value: "нет", name: "нет", type: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание" },
    { _id: "3", value: "МОН-31", name: "МОН-31" , type: "цилиндр"},
    { _id: "4", value: "КВ-31", name: "КВ-31" , type: "цилиндр"},
    { _id: "5", value: "СХ-21", name: "СХ-21" , type: "сувальда"},
    { _id: "6", value: "АН-21", name: "АН-21" , type: "сувальда"},
];

const eyes: IEye[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "Armadillo", name: "Armadillo" },
    { _id: "4", value: "Fuaro", name: "Fuaro" },
];

const eyeLocations: IEyeLocation[] = [
    { _id: "1", value: "нет", name: "нет" },    
    { _id: "3", value: "центр", name: "центр" },
    { _id: "4", value: "сбоку", name: "сбоку" },
];

const handles: IHandle[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "Ручка 26", name: "Ручка 26" },
    { _id: "4", value: "Ручка Пирамида", name: "Ручка Пирамида" },
];

const typeDecorations: ITypeDecoration[] = [
    { _id: "1", value: "нет", name: "нет", type: "нет",  variety: "нет"},
    { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание", variety: "примечание" },    
    { _id: "3", value: "Давление на полотне", name: "Давление на полотне", type: "металл",  variety: "Д" },
    { _id: "10", value: "Давление на полотне с эл. нерж. стали", name: "Давление на полотне с эл. нерж. стали", type: "металл",  variety: "ДН" },
    { _id: "11", value: "Давление и резка на полотне с эл. нерж. стали", name: "Давление и резка на полотне с эл. нерж. стали", type: "металл",  variety: "ДР" },
    { _id: "12", value: "Накладные элементы на металле", name: "Накладные элементы на металле", type: "металл",  variety: "Н" },
    { _id: "13", value: "Металлофиленки на металле", name: "Металлофиленки на металле", type: "металл",  variety: "Ф" },
    { _id: "6", value: "МДФ 16мм лам. фр.", name: "МДФ 16мм лам. фр.", type: "панель", variety: "фрезеровка" },
    { _id: "7", value: "МДФ 16мм лам. б/фр.", name: "МДФ 16мм лам. б/фр.", type: "панель",  variety: "нет" },
    { _id: "8", value: "МДФ 16мм лам. фр.с зеркалом", name: "МДФ 16мм лам. фр.с зеркалом", type: "панель",  variety: "нет" },
    { _id: "9", value: "под панель 16мм", name: "под панель 16мм", type: "нет", variety: "нет" },
];

const decorations: IDecoration[] = [
    { _id: "1", value: "нет", name: "нет", type: "нет", variety: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание", variety: "примечание" },
    { _id: "3", value: "Д1", name: "Д1", type: "металл", variety: "Д" },
    { _id: "4", value: "Д2", name: "Д2", type: "металл", variety: "Д" },
    { _id: "5", value: "ДН1", name: "ДН1", type: "металл", variety: "ДН" },
    { _id: "6", value: "ДН2", name: "ДН2", type: "металл", variety: "ДН" },
    { _id: "7", value: "ДР1", name: "ДР1", type: "металл", variety: "ДР" },
    { _id: "8", value: "ДР2", name: "ДР2", type: "металл", variety: "ДР" },
    { _id: "9", value: "Н1", name: "Н1", type: "металл", variety: "Н" },
    { _id: "10", value: "Н2", name: "Н2", type: "металл", variety: "Н" },
    { _id: "11", value: "Ф1", name: "Ф1", type: "металл", variety: "Ф" },
    { _id: "12", value: "Ф2", name: "Ф2", type: "металл", variety: "Ф" },
    { _id: "13", value: "ФЛ-1", name: "ФЛ-1", type: "панель", variety: "фрезеровка" },
    { _id: "14", value: "ФЛЗ-1", name: "ФЛЗ-1", type: "панель", variety: "фрезеровка" },
];

const wraps: IWrap[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "ALMON 2", name: "ALMON 2" },
    { _id: "4", value: "белая скала", name: "белая скала" },
    { _id: "5", value: "венге глянец", name: "венге глянец" },
];

const patinas: IPatina[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "золото", name: "золото" },
    { _id: "4", value: "серебро", name: "серебро" },    
];

const typeWindows: ITypeWindow[] = [
    { _id: "1", value: "нет", name: "нет", type: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание" },
    { _id: "3", value: "стеклопакет", name: "стеклопакет", type: "С" },
    { _id: "4", value: "ковка + стеклопакет", name: "ковка + стеклопакет", type: "КС" },
];

const windows: IWindow[] = [
    { _id: "1", value: "нет", name: "нет", type: "нет", height: 0, width: 0, tTermo: 0, t60: 0, t70: 0, t80: 0, t90: 0, t100: 0 },
    { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание", height: 0, width: 0, tTermo: 0, t60: 0, t70: 0, t80: 0, t90: 0, t100: 0},
    { _id: "3", value: "С1", name: "С1", type: "С", height: 1415, width: 260, tTermo: 81, t60: 42, t70: 52, t80: 62, t90: 72, t100: 81 },
    { _id: "4", value: "С2", name: "С2", type: "С", height: 1500, width: 260, tTermo: 81, t60: 32, t70: 32, t80: 32, t90: 32, t100: 32},
    { _id: "5", value: "КС1", name: "КС1", type: "КС", height: 1415, width: 260, tTermo: 81, t60: 42, t70: 52, t80: 62, t90: 72, t100: 81 },
    { _id: "6", value: "КС2", name: "КС2", type: "КС", height: 1500, width: 260, tTermo: 81, t60: 32, t70: 32, t80: 32, t90: 32, t100: 32 },
];

const colorTints: IColorTint[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "коричневое стекло", name: "коричневое стекло" },
    { _id: "4", value: "серебро", name: "серебро" },    
];

const colorForges: IColorForge[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "в цвет двери", name: "в цвет двери" },
    { _id: "4", value: "черный муар", name: "черный муар" },    
];

const patinaForges: IPatinaForge[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "бронза", name: "бронза" },
    { _id: "4", value: "золото", name: "золото" },    
];

const locationHinges: ILocationHinge[] = [
    { _id: "1", value: "левые", name: "левые" },
    { _id: "2", value: "правые", name: "правые" },       
];

const hingeCounts: IHingeCount[] = [
    { _id: "1", value: 2, name: 2 },
    { _id: "2", value: 3, name: 3 },       
];

const typeHinges: ITypeHinge[] = [
    { _id: "1", value: "капелька", name: "капелька" },
    { _id: "2", value: "на подшипнике", name: "на подшипнике" },       
    { _id: "3", value: "см. прим.", name: "см. прим." },       
];

const thickMetalLeafs: IThickMetal[] = [
    { _id: "1", value: 1.0 , name: 1.0 },
    { _id: "2", value: 1.2, name: 1.2 },       
    { _id: "3", value: 1.4, name: 1.4 },       
];

const thickMetalBoxes: IThickMetal[] = [    
    { _id: "1", value: 1.2, name: 1.2 },       
    { _id: "2", value: 1.4, name: 1.4 },       
];

const jambs: IJamb[] = [    
    { _id: "1", value: "стандартный", name: "стандартный", type: "все" },           
    { _id: "2", value: "фигурный", name: "фигурный", type: "металл" }, 
    { _id: "3", value: "капитель", name: "капитель", type: "панель" },
];

const locationJambs: ILocationJamb[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "со стороны петель", name: "со стороны петель" },       
    { _id: "3", value: "с противоп. стороны петель", name: "с противоп. стороны петель" },       
];

const fittingColors: IFittingColor[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "Х", name: "хром" },       
    { _id: "3", value: "Б", name: "бронза" },       
];

const sealers: ISealer[] = [
    { _id: "1", value: "стандартный", name: "стандартный" },
    { _id: "2", value: "1-резина 2-шлегель", name: "1-резина 2-шлегель" },       
    { _id: "3", value: "1-шлегель 2-шлегель", name: "1-шлегель 2-шлегель" },    
    { _id: "4", value: "1-шлегель 2-шлегель 3-магнит", name: "1-шлегель 2-шлегель 3-магнит" },    
];

const ears: IEar[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "80x40x8шт", name: "80x40x8шт" },       
    { _id: "3", value: "100x40x8шт", name: "100x40x8шт" },       
];

const holeInBoxes: IHoleInBox[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "6шт Д10", name: "6шт Д10" },       
    { _id: "3", value: "8шт Д12", name: "8шт Д12" },       
];

const colorDoors: IColorDoor[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "черный муар", name: "черный муар" },       
    { _id: "3", value: "шагрень черная", name: "шагрень черная" },       
];

const packagings: IPackaging[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "ХАВЕР", name: "ХАВЕР" },       
    { _id: "3", value: "ЛАБИРИНТ", name: "ЛАБИРИНТ" },       
];

const mock = {
    customers, parties, models, modelBoxes, locks, spinners, cylinders, covers, eyes,
    eyeLocations, handles, typeDecorations, decorations, wraps, patinas, typeWindows,
    windows, colorTints, colorForges, patinaForges, locationHinges, hingeCounts, 
    typeHinges, thickMetalLeafs, thickMetalBoxes, jambs, locationJambs, fittingColors, sealers,
    ears, holeInBoxes, colorDoors, packagings
}

const deley = 50

export type tables =
    "customers" |
    "parties"  |
    "models" |
    "modelBoxes" |
    "locks"|
    "spinners" |
    "cylinders" |
    "covers" |
    "eyes" |
    "eyeLocations" |
    "handles" |
    "typeDecorations" |
    "decorations" |
    "wraps" |
    "patinas" |
    "typeWindows" |
    "windows" |
    "colorTints" |
    "colorForges" |
    "patinaForges" |
    "locationHinges" |
    "hingeCounts" |
    "typeHinges" |
    "thickMetalLeafs" |
    "thickMetalBoxes" |
    "jambs" |
    "locationJambs" |
    "fittingColors" |
    "sealers" | 
    "ears" |
    "holeInBoxes" |
    "colorDoors" |
    "packagings"

const fetchTableByName = (tableName: tables) => {
    return new Promise<{data:any}>((res) => {
        setTimeout(() => res({data: mock[tableName]}), deley) 
    })
}
const createOrder = (data: IOrder) => {
    return http.post("/orders", data);
};

const updateOrder = (data: IOrder) => {
    return http.patch(`/orders/${data.id}`, data);
};

const getOrders = (filters: {}) => {
    return http.get("/orders", { params: filters });
};

const getOrder = (id: number) => {
    return http.get<IOrder>(`/orders/${id}`);
};

export const api = {
    fetchTableByName,    
    createOrder,    
    getOrders,
    getOrder,    
    updateOrder
}
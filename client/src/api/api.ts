import { IModel } from "../interfaces/IModel";
import { IOpeningType } from '../interfaces/IOpeningType';
import { ILock } from '../interfaces/ILock';
import { ISpinner } from '../interfaces/ISpinner';
import { ICylinder } from '../interfaces/ICylinder';
import { ICover } from '../interfaces/ICover';
import { IEye } from '../interfaces/IEye';
import { IHandle } from '../interfaces/IHandle';
import { ITypeDecoration } from '../interfaces/ITypeDecoration';
import { IDecoration } from "../interfaces/IDecoration";
import { IWrap } from '../interfaces/IWrap';
import { IPatina } from '../interfaces/IPatina';
import { ITypeWindow } from "../interfaces/ITypeWindow";
import { IWindow } from '../interfaces/IWindow';
import { IColorTint } from '../interfaces/IColorTint';
import { IColorForge } from '../interfaces/IColorForge';
import { IPatinaForge } from '../interfaces/IPatinaForge';
import { ILocationHinge } from '../interfaces/ILoacationHinge';
import { ITypeHinge } from '../interfaces/ITypeHinge';
import { IThickMetal } from '../interfaces/IThickMetal';
import { IModelBox } from '../interfaces/IModelBox';
import { IParty } from '../interfaces/IParty';
import { ICustomer } from '../interfaces/ICustomer';

const customers: ICustomer[] = [
    { _id: "1", value: "D001", name: "Бункер" },
    { _id: "2", value: "D002", name: "Волга-Бункер" },
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
    { _id: "1", value: "ММ", name: "металл-металл", contours: [1], doorThicks: [60], typeOutside: "металл", typeInside: "металл", isTermo: false},
    { _id: "2", value: "МП", name: "металл-панель", contours: [1, 2], doorThicks: [60, 70], typeOutside: "металл", typeInside: "панель", isTermo: false},
    { _id: "3", value: "ПП", name: "панель-панель", contours: [1, 2, 3], doorThicks: [60, 70, 80], typeOutside: "панель", typeInside: "панель", isTermo: false },
    { _id: "4", value: "МП_Пена", name: "металл-панель пенопласт", contours: [3], doorThicks: [60, 70, 80, 90, 100], typeOutside: "металл", typeInside: "панель", isTermo: false },
    { _id: "5", value: "ПП_Пена", name: "панель-панель пенопласт", contours: [2, 3], doorThicks: [90, 100], typeOutside: "панель", typeInside: "панель", isTermo: false },
    { _id: "6", value: "МПТ", name: "металл-панель термо", contours: [2, 3], doorThicks: [90, 100], typeOutside: "металл", typeInside: "панель", isTermo: true },
    { _id: "7", value: "ППТ", name: "панель-панель термо", contours: [2, 3], doorThicks: [90, 100], typeOutside: "панель", typeInside: "панель", isTermo: true },
];

const modelBoxes: IModelBox[] = [
    { _id: "1", value: "открытая", name: "открытая" },
    { _id: "2", value: "закрытая", name: "закрытая" },    
    { _id: "3", value: "закрытая утепленная", name: "закрытая утепленная" },    
];

const openingTypes: IOpeningType[] = [
    { _id: "1", value: "наружного", name: "наружного" },
    { _id: "2", value: "внутреннего", name: "внутреннего" },
];

const locks: ILock[] = [
    { _id: "1", value: "осн сув без верт", name: "осн сув без верт", installation: "основной", type: "сувальда", isBolt: false },
    { _id: "2", value: "осн сув с верт", name: "осн сув с верт", installation: "основной", type: "сувальда", isBolt: true },
    { _id: "3", value: "осн цил без верт", name: "осн цил без верт", installation: "основной", type: "цилиндр", isBolt: false },
    { _id: "4", value: "осн цил c верт", name: "осн цил c верт", installation: "основной", type: "цилиндр", isBolt: true },
    { _id: "5", value: "осн цил-сув без верт", name: "осн двухсистемный без верт", installation: "основной", type: "двухсистемный", isBolt: false },
    { _id: "6", value: "осн цил-сув c верт", name: "осн двухсистемный c верт", installation: "основной", type: "двухсистемный", isBolt: true },
    { _id: "7", value: "осн сув-цил без верт", name: "осн двухсистемный без верт", installation: "основной", type: "двухсистемный", isBolt: false },
    { _id: "8", value: "осн сув-цил с верт", name: "осн двухсистемный с верт", installation: "основной", type: "двухсистемный", isBolt: true },
    { _id: "9", value: "осн другое без верт", name: "осн другое без верт", installation: "основной", type: "другое", isBolt: false },
    { _id: "10", value: "осн другое с верт", name: "осн другое с верт", installation: "основной", type: "другое", isBolt: true },
    { _id: "11", value: "доп цил", name: "доп цил", installation: "дополнительный", type: "цилиндр", isBolt: false },
    { _id: "12", value: "доп сув", name: "доп сув", installation: "дополнительный", type: "сувальда", isBolt: false },
    { _id: "13", value: "нет", name: "нет", installation: "нет", type: "нет", isBolt: false },
    { _id: "14", value: "см. прим.", name: "см. прим.", installation: "примечание", type: "примечание", isBolt: true },    
]

const spinners: ISpinner[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "вертушок 1", name: "вертушок 1" },
    { _id: "4", value: "вертушок 2", name: "вертушок 2" },
];

const cylinders: ICylinder[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "Цилиндр 1", name: "Цилиндр 1" },
    { _id: "3", value: "Цилиндр 2", name: "Цилиндр 2" },
];

const covers: ICover[] = [
    { _id: "1", value: "нет", name: "нет", type: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание" },
    { _id: "3", value: "накладка 1 цил", name: "накладка 1 цил" , type: "цилиндр"},
    { _id: "4", value: "накладка 2 сув", name: "накладка 2 сув" , type: "сувальда"},
];

const eyes: IEye[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "хром", name: "хром" },
    { _id: "4", value: "хром", name: "хром" },
];

const handles: IHandle[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "ручка хром", name: "ручка хром" },
    { _id: "4", value: "ручка бронза", name: "ручка бронза" },
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

const deley = 50

const getCustomers = () => new Promise<{data:ICustomer[]}>((res) => { setTimeout(() => res({data: customers}), deley) })
const getParties = () => new Promise<{data:IParty[]}>((res) => { setTimeout(() => res({data: parties}), deley) })
const getModels = () => new Promise<{data:IModel[]}>((res) => { setTimeout(() => res({data: models}), deley) })
const getModelBoxes = () => new Promise<{data:IModelBox[]}>((res) => { setTimeout(() => res({data: modelBoxes}), deley) })
const getOpeningTypes = () => new Promise<{data:IOpeningType[]}>((res) => { setTimeout(() => res({data: openingTypes}), deley) })
const getLocks = () => new Promise<{data:ILock[]}>((res) => { setTimeout(() => res({data: locks}), deley) })
const getSpinners = () => new Promise<{data:ISpinner[]}>((res) => { setTimeout(() => res({data: spinners}), deley) })
const getCyliners = () => new Promise<{data:ICylinder[]}>((res) => { setTimeout(() => res({data: cylinders}), deley) })
const getCovers = () => new Promise<{data:ICover[]}>((res) => { setTimeout(() => res({data: covers}), deley) })
const getEyes = () => new Promise<{data:IEye[]}>((res) => { setTimeout(() => res({data: eyes}), deley) })
const getHandles = () => new Promise<{data:IHandle[]}>((res) => { setTimeout(() => res({data: handles}), deley) })
const getTypeDecorations = () => new Promise<{data:ITypeDecoration[]}>((res) => { setTimeout(() => res({data: typeDecorations}), deley) })
const getDecorations = () => new Promise<{data:IDecoration[]}>((res) => { setTimeout(() => res({data: decorations}), deley) })
const getWraps = () => new Promise<{data:IWrap[]}>((res) => { setTimeout(() => res({data: wraps}), deley) })
const getPatinas = () => new Promise<{data:IPatina[]}>((res) => { setTimeout(() => res({data: patinas}), deley) })
const getTypeWindows = () => new Promise<{data:ITypeWindow[]}>((res) => { setTimeout(() => res({data: typeWindows}), deley) })
const getWindows = () => new Promise<{data:IWindow[]}>((res) => { setTimeout(() => res({data: windows}), deley) })
const getColorTints = () => new Promise<{data:IColorTint[]}>((res) => { setTimeout(() => res({data: colorTints}), deley) })
const getColorForges = () => new Promise<{data: IColorForge[]}>((res) => { setTimeout(() => res({data: colorForges}), deley) })
const getPatinaForges = () => new Promise<{data: IPatinaForge[]}>((res) => { setTimeout(() => res({data: patinaForges}), deley) })
const getLoacationHinges = () => new Promise<{data: ILocationHinge[]}>((res) => { setTimeout(() => res({data: locationHinges}), deley) })
const getTypeHinges = () => new Promise<{data: ITypeHinge[]}>((res) => { setTimeout(() => res({data: typeHinges}), deley) })
const getThickMetalLeafs = () => new Promise<{data: IThickMetal[]}>((res) => { setTimeout(() => res({data: thickMetalLeafs}), deley) })
const getThickMetalBoxes = () => new Promise<{data: IThickMetal[]}>((res) => { setTimeout(() => res({data: thickMetalBoxes}), deley) })

export const api = {
    getCustomers,
    getParties, 
    getModels,
    getModelBoxes,
    getOpeningTypes,
    getLocks,
    getSpinners,
    getCyliners,
    getCovers,
    getEyes,
    getHandles,
    getTypeDecorations,
    getDecorations,
    getWraps,
    getPatinas,
    getTypeWindows,
    getWindows,
    getColorTints,
    getColorForges,
    getPatinaForges,
    getLoacationHinges,
    getTypeHinges,
    getThickMetalLeafs,
    getThickMetalBoxes
}
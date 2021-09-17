import { IModel } from "../interfaces/IModel";
import { IOpeningType } from "../interfaces/IOpeningType";
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

const customers = [
    { _id: 1, value: "D001", name: "Бункер" },
    { _id: 2, value: "D002", name: "Волга-Бункер" },
    { _id: 3, value: "D003", name: "Лабиринт" },
    { _id: 4, value: "D004", name: "Красноярск" },
];

const parties = [
    { _id: 1, value: "заказная", name: "заказная" },
    { _id: 2, value: "партия", name: "партия" },
    { _id: 3, value: "партия-1", name: "партия-1" },
    { _id: 4, value: "партия-2", name: "партия-2" },
    { _id: 5, value: "партия-3", name: "партия-3" },
];

const models: IModel[] = [
    { _id: "1", value: "ММ", name: "металл-металл", contours: [1], doorThicks: [60], typeOutside: "металл", typeInside: "металл"},
    { _id: "2", value: "МП", name: "металл-панель", contours: [1, 2], doorThicks: [60, 70], typeOutside: "металл", typeInside: "панель"},
    { _id: "3", value: "ПП", name: "панель-панель", contours: [1, 2, 3], doorThicks: [60, 70, 80], typeOutside: "панель", typeInside: "панель" },
    { _id: "4", value: "МП_Пена", name: "металл-панель пенопласт", contours: [3], doorThicks: [60, 70, 80, 90, 100], typeOutside: "металл", typeInside: "панель" },
    { _id: "5", value: "ПП_Пена", name: "панель-панель пенопласт", contours: [2, 3], doorThicks: [90, 100], typeOutside: "панель", typeInside: "панель" },
];

const modelBoxes = [
    { _id: 1, value: "открытая", name: "открытая" },
    { _id: 2, value: "закрытая", name: "закрытая" },    
    { _id: 3, value: "закрытая утепленная", name: "закрытая утепленная" },    
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
    { _id: "3", value: "хром центр", name: "хром центр" },
    { _id: "4", value: "хром сбоку", name: "хром сбоку" },
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
    { _id: "4", value: "Белая скала", name: "Белая скала" },
    { _id: "5", value: "Венге глянец", name: "Венге глянец" },
];

const patinas: IPatina[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "см. прим.", name: "см. прим." },
    { _id: "3", value: "золото", name: "золото" },
    { _id: "4", value: "серебро", name: "серебро" },    
];


const deley = 50

const getCustomers = () => new Promise<any>((resolve, reject) => {
    if (!customers) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: customers}) , deley);
});

const getParties = () => new Promise<any>((resolve, reject) => {
    if (!parties) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: parties}) , deley);
});

const getModels = () => new Promise<any>((resolve, reject) => {
    if (!models) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: models}) , deley);
});

const getModelBoxes = () => new Promise<any>((resolve, reject) => {
    if (!modelBoxes) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: modelBoxes}) , deley);
});

const getOpeningTypes = () => new Promise<any>((resolve, reject) => {
    if (!openingTypes) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: openingTypes}) , deley);
});

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
}
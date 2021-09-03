import { IModel } from "../interfaces/IModel";
import { IOpeningType } from "../interfaces/IOpeningType";
import { ILock } from '../interfaces/ILock';
import { ISpinner } from '../interfaces/ISpinner';
import { ICylinder } from '../interfaces/ICylinder';

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
    { _id: "1", value: "ММ", name: "металл-металл", contours: [1], doorThicks: [60] },
    { _id: "2", value: "МП", name: "металл-панель", contours: [1, 2], doorThicks: [60, 70] },
    { _id: "3", value: "ПП", name: "панель-панель", contours: [1, 2, 3], doorThicks: [60, 70, 80] },
    { _id: "4", value: "МП_Пена", name: "металл-панель пенопласт", contours: [3], doorThicks: [60, 70, 80, 90, 100] },
    { _id: "5", value: "ПП_Пена", name: "панель-панель пенопласт", contours: [2, 3], doorThicks: [90, 100] },
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
    { _id: "3", value: "осн цил без верт", name: "осн цил без верт", installation: "основной", type: "сувальда", isBolt: false },
    { _id: "4", value: "осн цил c верт", name: "осн цил c верт", installation: "основной", type: "сувальда", isBolt: true },
    { _id: "5", value: "осн цил-сув без верт", name: "осн цил-сув без верт", installation: "основной", type: "цилиндр-сувальда", isBolt: false },
    { _id: "6", value: "осн цил-сув c верт", name: "осн цил-сув c верт", installation: "основной", type: "цилиндр-сувальда", isBolt: true },
    { _id: "7", value: "осн сув-цил без верт", name: "осн сув-цил без верт", installation: "основной", type: "сувальда-цилиндр", isBolt: false },
    { _id: "8", value: "осн сув-цил с верт", name: "осн сув-цил с верт", installation: "основной", type: "сувальда-цилиндр", isBolt: true },
    { _id: "9", value: "осн другое без верт", name: "осн другое без верт", installation: "основной", type: "другое", isBolt: false },
    { _id: "10", value: "осн другое с верт", name: "осн другое с верт", installation: "основной", type: "другое", isBolt: true },
    { _id: "11", value: "доп цил", name: "доп цил", installation: "дополнительный", type: "цилиндр", isBolt: false },
    { _id: "12", value: "доп сув", name: "доп сув", installation: "дополнительный", type: "сувальда", isBolt: false },
]

const spinners: ISpinner[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "Вертушок 1", name: "Вертушок 1" },
    { _id: "3", value: "Вертушок 2", name: "Вертушок 2" },
];

const cylinders: ICylinder[] = [
    { _id: "1", value: "нет", name: "нет" },
    { _id: "2", value: "Цилиндр 1", name: "Цилиндр 1" },
    { _id: "3", value: "Цилиндр 2", name: "Цилиндр 2" },
];



const deley = 100

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

const getLocks = () => new Promise<{data:ILock[]}>((res) => {
    setTimeout(() => res({data: locks}), deley)
})    

const getSpinners = () => new Promise<{data:ISpinner[]}>((res) => {
    setTimeout(() => res({data: spinners}), deley)
}) 

const getCyliners = () => new Promise<{data:ICylinder[]}>((res) => {
    setTimeout(() => res({data: cylinders}), deley)
})
export const api = {
    getCustomers,
    getParties, 
    getModels,
    getModelBoxes,
    getOpeningTypes,
    getLocks,
    getSpinners,
    getCyliners
}
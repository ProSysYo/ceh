import { IModel } from "../interfaces/IModel";

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


const getCustomers = () => new Promise<any>((resolve, reject) => {
    if (!customers) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: customers}) , 250);
});

const getParties = () => new Promise<any>((resolve, reject) => {
    if (!parties) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: parties}) , 250);
});

const getModels = () => new Promise<any>((resolve, reject) => {
    if (!models) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: models}) , 250);
});

const getModelBoxes = () => new Promise<any>((resolve, reject) => {
    if (!modelBoxes) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
    setTimeout(() => resolve({data: modelBoxes}) , 250);
});


export const api = {
    getCustomers,
    getParties, 
    getModels,
    getModelBoxes
}
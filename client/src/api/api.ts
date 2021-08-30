const customers = [
    { _id: 1, code: "D001", name: "Бункер" },
    { _id: 2, code: "D002", name: "Волга-Бункер" },
    { _id: 3, code: "D003", name: "Лабиринт" },
    { _id: 4, code: "D004", name: "Красноярск" },
]

const getCustomers = () =>
    new Promise<any>((resolve, reject) => {
        if (!customers) {
            return setTimeout(
                () => reject(new Error('Users not found')),
                250
            );
        }
        setTimeout(() => resolve({data: customers}) , 250);
    });

export const api = {
    getCustomers
}
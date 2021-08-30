const customers = [
    { _id: 1, code: "D001", name: "Бункер" },
    { _id: 2, code: "D002", name: "Алиса" },
]

const getCustomers = () =>
    new Promise((resolve, reject) => {
        if (!customers) {
            return setTimeout(
                () => reject(new Error('Users not found')),
                250
            );
        }
        setTimeout(() => resolve(customers), 250);
    });

export const api = {
    getCustomers
}
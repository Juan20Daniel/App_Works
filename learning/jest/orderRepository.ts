export type Product = {
    id: string;
    price: number;
    quantity: number;
};

export type Order = {
    id: string;
    customerId: string;
    products: Product[];
    total: number;
};

export type CreateOrderData = {
    customerId: string;
    products: Product[];
    total: number;
};


export const saveOrder = async (order: {
    customerId: string;
    products: Array<{
        id: string;
        price: number;
        quantity: number;
    }>;
    total: number;
}): Promise<Order> => {
    throw new Error('Error de algo');
};
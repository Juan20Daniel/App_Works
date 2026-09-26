export type Customer = {
    id: string;
    name: string;
    isPremium: boolean;
};

export const findCustomerById = async (
    customerId: string
): Promise<Customer | null> => {
    throw new Error('Error de algo');
};
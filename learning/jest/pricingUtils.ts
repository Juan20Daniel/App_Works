export const calculateSubtotal = (
    products: Array<{
        id: string;
        price: number;
        quantity: number;
    }>
) => {
    return products.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );
};

export const applyDiscount = (
    subtotal: number,
    percentage: number
) => {
    return subtotal - subtotal * percentage;
};
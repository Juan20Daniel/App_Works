import {
    calculateSubtotal,
    applyDiscount
} from './pricingUtils';

import {
    findCustomerById
} from './customerRepository';

import {
    saveOrder
} from './orderRepository';

type Product = {
    id: string;
    price: number;
    quantity: number;
};

type CreateOrderInput = {
    customerId: string;
    products: Product[];
};

export const createOrder = async (
    data: CreateOrderInput
) => {
    if (data.products.length === 0) {
        throw new Error('La orden debe tener productos');
    }

    const customer = await findCustomerById(
        data.customerId
    );

    if (!customer) {
        throw new Error('Cliente no encontrado');
    }

    const subtotal = calculateSubtotal(
        data.products
    );

    const total = customer.isPremium
        ? applyDiscount(subtotal, 0.1)
        : subtotal;

    const order = await saveOrder({
        customerId: data.customerId,
        products: data.products,
        total
    });

    return {
        ...order,
        customerName: customer.name
    };
};
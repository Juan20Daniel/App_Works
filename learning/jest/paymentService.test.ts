import { createOrder } from "./orderService";
import { findCustomerById } from './customerRepository';
import { saveOrder } from './orderRepository';

jest.mock('./customerRepository');
jest.mock('./orderRepository');
const mockFindCustomerById = jest.mocked(findCustomerById);
const mockSaveOrder = jest.mocked(saveOrder);

const data = {
    customerId: 'customer-20',
    products: [
        {
            id: 'keyboard',
            price: 1200,
            quantity: 2
        },
        {
            id: 'mouse',
            price: 500,
            quantity: 1
        },
        {
            id: 'monitor',
            price: 4000,
            quantity: 2
        }
    ]
};

describe('Ejercicio 1 — Procesamiento de una orden', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })
    test('createOrder lanza error de forma correcta cuando no hay productos y con el mensaje La orden debe tener productos', async () => {
        await expect(createOrder({customerId:'ccss-22', products:[]}))
        .rejects.toThrow('La orden debe tener productos');

        expect(mockFindCustomerById).not.toHaveBeenCalled();
        expect(mockSaveOrder).not.toHaveBeenCalled();
    });
    test('createOrder propaga el error de forma correcta cuando findCustomerById falla', async () => {
        mockFindCustomerById.mockRejectedValue(new Error('Error al buscar el cliente'))
        
        await expect(createOrder(data))
        .rejects.toThrow('Error al buscar el cliente');

        expect(mockFindCustomerById).toHaveBeenCalledWith('customer-20');
        expect(mockFindCustomerById).toHaveBeenCalledTimes(1);
        expect(mockSaveOrder).not.toHaveBeenCalled();
    });
    test('createOrder propaga el error de forma correcta cuando saveOrder falla', async () => {
        mockFindCustomerById.mockResolvedValue({
            id: 'customer-20',
            name: 'Juan Daniel Morales',
            isPremium: false
        });
        mockSaveOrder.mockRejectedValue(new Error('Error al guardad la orden'))
        
        await expect(createOrder(data))
        .rejects.toThrow('Error al guardad la orden');

        expect(mockFindCustomerById).toHaveBeenCalledWith('customer-20');
        expect(mockFindCustomerById).toHaveBeenCalledTimes(1);
        expect(mockSaveOrder).toHaveBeenCalledWith({
            customerId:'customer-20',
            products:data.products,
            total:10900
        });
        expect(mockSaveOrder).toHaveBeenCalledTimes(1);
    });

    test('La función createOrder crea la orden de manera correcta con usuarios no premium', async () => {
        mockFindCustomerById.mockResolvedValue({
            id: 'customer-20',
            name: 'Juan Daniel Morales',
            isPremium: false
        });
        mockSaveOrder.mockResolvedValue({
            id: 'ordes-rre-43',
            customerId: 'customer-20',
            products: [...data.products],
            total: 10900
        })
        const result = await createOrder(data); 
        
        expect(result).toStrictEqual({
            id: 'ordes-rre-43',
            customerId: 'customer-20',
            products: [
                { id: 'keyboard', price: 1200, quantity: 2 },
                { id: 'mouse', price: 500, quantity: 1 },
                { id: 'monitor', price: 4000, quantity: 2 }
            ],
            total: 10900,
            customerName: 'Juan Daniel Morales'
        });
    });
});














// import { cancelOrder } from './cancelOrderService';
// import {
//     findOrderById,
//     cancelOrderById
// } from './orderRepository';

// import { refundPayment } from './paymentService';

// jest.mock('./orderRepository');
// jest.mock('./paymentService');

// const mockFindOrderById = jest.mocked(findOrderById);
// const mockCancelOrderById = jest.mocked(cancelOrderById);
// const mockRefundPayment = jest.mocked(refundPayment);

// describe('Ejercicio 4 — Cancelación de pedido con refund condicional', () => {
//     beforeEach(() => {
//         jest.resetAllMocks();
//     })
//     test('cancelOrder lanza error con id vacio de forma correcta', async () => {
//         await expect(cancelOrder('')).rejects.toThrow('Order ID requerido');
//         expect(mockFindOrderById).not.toHaveBeenCalled();
//         expect(mockCancelOrderById).not.toHaveBeenCalled();
//         expect(mockRefundPayment).not.toHaveBeenCalled();
//     });

//     test('cancelOrder lanza error cuando la busqueda devuelve null con el mensaje Orden no encontrada', async () => {
//         mockFindOrderById.mockResolvedValue(null);
//         await expect(cancelOrder('42323')).rejects.toThrow('Orden no encontrada');
//         expect(mockCancelOrderById).not.toHaveBeenCalled();
//         expect(mockRefundPayment).not.toHaveBeenCalled();
//     });

//     test('cancelOrder lanza error cuando la orden ya fue cancelada con el mensaje La orden ya está cancelada', async () => {
//         mockFindOrderById.mockResolvedValue({
//             id: '3344',
//             userId: '422E',
//             status: 'cancelled',
//             total: 32
//         });

//         await expect(cancelOrder('3344')).rejects.toThrow('La orden ya está cancelada');
//         expect(mockRefundPayment).not.toHaveBeenCalled();
//         expect(mockCancelOrderById).not.toHaveBeenCalled();
//     });

//     test('No se ejecuta el rembolso, pero cancela la orden por id', async () => {
//         mockFindOrderById.mockResolvedValue({
//             id: '3344',
//             userId: '422E',
//             status: 'pending',
//             total: 32
//         });
//         mockCancelOrderById.mockResolvedValue();

//         const result = await cancelOrder('3344');
//         expect(result).toStrictEqual({
//             orderId: '3344',
//             status: 'cancelled'
//         })
//         expect(mockRefundPayment).not.toHaveBeenCalled();
//         expect(mockCancelOrderById).toHaveBeenCalledTimes(1);
//     });

//     test('Proceso de cancelación completo', async () => {
//         mockFindOrderById.mockResolvedValue({
//             id: '3344',
//             userId: '422E',
//             status: 'paid',
//             total: 32
//         });
//         mockRefundPayment.mockResolvedValue();
//         mockCancelOrderById.mockResolvedValue();

//         const result = await cancelOrder('3344');
//         expect(result).toStrictEqual({
//             orderId: '3344',
//             status: 'cancelled'
//         });
//         expect(mockFindOrderById).toHaveBeenCalledTimes(1);
//         expect(mockFindOrderById).toHaveBeenCalledWith('3344');
//         expect(mockRefundPayment).toHaveBeenCalledTimes(1);
//         expect(mockRefundPayment).toHaveBeenCalledWith('3344', 32);
//         expect(mockCancelOrderById).toHaveBeenCalledTimes(1);
//         expect(mockCancelOrderById).toHaveBeenCalledWith('3344');
//     });
//     test('El rembolso falla y propaga el error', async () => {
//         mockFindOrderById.mockResolvedValue({
//             id: '3344',
//             userId: '422E',
//             status: 'paid',
//             total: 32
//         });
//         mockRefundPayment.mockRejectedValue(new Error('Error al hacer el rembolso'));
//         mockCancelOrderById.mockResolvedValue();

//         await expect(cancelOrder('3344'))
//             .rejects.toThrow('Error al hacer el rembolso');
        
//         expect(mockCancelOrderById).not.toHaveBeenCalled();
//         expect(mockRefundPayment).toHaveBeenCalledWith('3344', 32)
//     });
// });

// import { sendOrderConfirmation } from './orderRepository.ts';
// import { saveOrder } from './orderRepository';
// import { createOrder } from './cancelOrderService.ts';

// jest.mock('./notificationService');
// jest.mock('./orderRepository');

// const mockSendOrderConfirmation = jest.mocked(sendOrderConfirmation);
// const mockSaveOrder = jest.mocked(saveOrder);

// describe('Ejercicio 3 — creación de pedido con dos dependencias', () => {
//     beforeEach(() => {
//         jest.resetAllMocks()
//     })
//     test('Lanza error de forma correcta con userId vacío y mensaje de error Usuario requerido', async () => {
//         await expect(
//             createOrder('', 8)
//         ).rejects.toThrow('Usuario requerido');
//         expect(mockSaveOrder).not.toHaveBeenCalled();
//         expect(mockSendOrderConfirmation).not.toHaveBeenCalled();
//     });
//     test('Lanza error de forma correcta con total = 0 y mensaje de error Total inválido', async () => {
//         await expect(
//             createOrder('1234', 0)
//         ).rejects.toThrow('Total inválido');
//         expect(mockSaveOrder).not.toHaveBeenCalled();
//         expect(mockSendOrderConfirmation).not.toHaveBeenCalled();
//     });
//     test('saveOrder() lanza error y se propaga de forma correcta', async () => {
//         mockSaveOrder.mockRejectedValue(new Error('Error al guardar por X o Y razón'));

//         await expect(
//             createOrder('332', 4)
//         ).rejects.toThrow('Error al guardar por X o Y razón');
//         expect(mockSaveOrder).toHaveBeenCalledWith('332', 4);
//         expect(mockSendOrderConfirmation).not.toHaveBeenCalled();
//     });

//     test('Con datos de entrada correctos, createOrder devuelve una orden válida', async () => {
//         mockSaveOrder.mockResolvedValue({
//             id: 'BW55',
//             userId: '4223',
//             total: 434
//         });

//         const result = await createOrder('4223', 434);
//         expect(result).toEqual({
//             orderId: 'BW55',
//             userId: '4223',
//             total: 434,
//             status: 'created'
//         });
//         expect(mockSaveOrder).toHaveBeenCalledWith('4223', 434);
//         expect(mockSaveOrder).toHaveBeenCalledTimes(1);

//         expect(mockSendOrderConfirmation).toHaveBeenCalledWith('4223', 'BW55');
//         expect(mockSendOrderConfirmation).toHaveBeenCalledTimes(1);
//     });
// });























// jest.mock('./productRepository');

// const mockFindProductById =
//     jest.mocked(findProductById);

// describe('Ejercicio 2 — servicio asíncrono con dependencia', () => {
//     beforeEach(() => {
//         mockFindProductById.mockClear();
//     });
//     test('Lanza error si la cantidad no es válida con el mensaje: Cantidad inválida y evita llamar a findProductById', async () => {
//         await expect(
//             getProductForSale('3422', 0)
//         ).rejects.toThrow('Cantidad inválida');
//         expect(mockFindProductById).not.toHaveBeenCalled();
//     });

//     test('Lanza error si el producto no fue econtrado con el mensaje: Producto no encontrado', async () => {
//         mockFindProductById.mockResolvedValue(null);
//         await expect(
//             getProductForSale('3422', 23)
//         ).rejects.toThrow('Producto no encontrado');
//     });
//     test('Lanza error si el producto no esta activo con el mensaje: Producto inactivo', async () => {
//         mockFindProductById.mockResolvedValue({
//             id: '3422',
//             name: 'Laptop',
//             price: 1000,
//             stock: 5,
//             isActive: false
//         });
        
//         await expect(
//             getProductForSale('3422', 3)
//         ).rejects.toThrow('Producto no disponible');
//     });
//     test('Lanza error si no hay suficiente en stock con el mensaje: Stock insuficiente', async () => {
//         mockFindProductById.mockResolvedValue({
//             id: '3422',
//             name: 'Laptop',
//             price: 1000,
//             stock: 2,
//             isActive: true
//         });
//         await expect(
//             getProductForSale('3422', 3)
//         ).rejects.toThrow('Stock insuficiente');
//     });
//     test('La compra pasa sin errores', async () => {
//         mockFindProductById.mockResolvedValue({
//             id: '3422',
//             name: 'Laptop',
//             price: 1000,
//             stock: 2,
//             isActive: true
//         });
       
//         const result = await getProductForSale('3422', 2);
//         expect(result).toEqual({
//             id: '3422',
//             name: 'Laptop',
//             quantity: 2,
//             unitPrice: 1000,
//             total: 2000
//         });
     
//         expect(mockFindProductById).toHaveBeenCalledWith('3422')
//     });
// });




// describe('calculatePurchase', () => {
//     test.each([
//         {
//             user: {
//                 id: '3fewf45',
//                 isActive: false,
//                 isPremium: true
//             },
//             product: {  
//                 id: '35454gg',
//                 price: 500,
//                 stock: 12
//             },
//             quantity: 2,
//             descriptionTest: 'Usuario inactivo, falla con mensaje de error Usuario inactivo',
//             throwError: 'Usuario inactivo'
//         },
//         {
//             user: {
//                 id: '3fewf45',
//                 isActive: true,
//                 isPremium: true
//             },
//             product: {  
//                 id: '35454gg',
//                 price: 500,
//                 stock: 12
//             },
//             quantity: 0,
//             descriptionTest: 'Usuario activo con cantidad 0, falla con mensaje de error Cantidad inválida',
//             throwError: 'Cantidad inválida'
//         },
//         {
//             user: {
//                 id: '3fewf45',
//                 isActive: true,
//                 isPremium: true
//             },
//             product: {  
//                 id: '35454gg',
//                 price: 500,
//                 stock: 0
//             },
//             quantity: 1,
//             descriptionTest: 'Usuario activo con cantidad válida pero con stock insuficiente, falla con mensaje de error Stock insuficiente',
//             throwError: 'Stock insuficiente'
//         },
//     ])('$descriptionTest', ({user, product, quantity, throwError}) => {
//         expect(() => calculatePurchase(user, product, quantity))
//             .toThrow(throwError);   
//     });
//     test('Compra válida con usuario premium devuelve descuento de 100', () => {
//         const user:User = {
//             id: '3fewf45',
//             isActive: true,
//             isPremium: true
//         }
//         const product:Product = {  
//             id: '35454gg',
//             price: 1000,
//             stock: 1
//         }
//         const result = calculatePurchase(user, product, 1);
//         expect(result).toStrictEqual({
//             userId: '3fewf45',
//             productId: '35454gg',
//             quantity:  1,
//             subtotal: 1000,
//             discount: 100,
//             total: 900
//         });
//     });
//      test('Compra válida con usuario no premium devuelve descuento de 0', () => {
//         const user:User = {
//             id: '3fewf45',
//             isActive: true,
//             isPremium: false
//         }
//         const product:Product = {  
//             id: '35454gg',
//             price: 1000,
//             stock: 1
//         }
//         const result = calculatePurchase(user, product, 1);
//         expect(result).toStrictEqual({
//                 userId: '3fewf45',
//                 productId: '35454gg',
//                 quantity: 1,
//                 subtotal: 1000,
//                 discount: 0,
//                 total: 1000
//         });
//     });
// });

// describe('Ejercicio 6 de 6 — Reto final de errores', () => {
//     test('Lanza error con el tipo especificado', async () => {
//         await expect(
//             processPayment(0, true)
//         ).rejects.toThrow(InvalidAmountError)
//     });
//     test('Lanza error con el mensaje indicado', async () => {
//         await expect(
//             processPayment(0, true)
//         ).rejects.toThrow('El monto debe ser mayor que cero')
//     });
//     test('Lanza error con el tipo PaymentRejectedError', async () => {
//         await expect(
//             processPayment(500, false)
//         ).rejects.toThrow(PaymentRejectedError)
//     });
//     test('Regresa el resultado correcto', async () => {
//         await expect(
//             processPayment(500, true)
//         ).resolves.toEqual({
//             success: true,
//             amount: 500
//         });
//     });
// });

// Stmts   → ¿ejecuté las instrucciones?
// Branch  → ¿recorrí los caminos?
// Funcs   → ¿ejecuté las funciones?
// Lines   → ¿ejecuté las líneas?

// describe('Ejercicio 2 de 6 — Tipo de error', () => {
//     test('Lanza error de forma correcta', () => {
//         expect(() => divide(10, 0)).toThrow('No se puede dividir entre cero');
//     });
// });

// toBe
// → igualdad exacta / misma referencia

// toEqual
// → mismo contenido

// toStrictEqual
// → mismo contenido + estructura estricta

// toContain
// → contiene este valor

// toContainEqual
// → contiene un objeto/array equivalente

// toHaveProperty
// → tiene esta propiedad

// objectContaining
// → contiene estas propiedades como mínimo

// arrayContaining
// → contiene estos elementos como mínimo

// expect.any(Tipo)
// → cualquier valor de ese tipo

// expect.anything()
// → cualquier cosa excepto null/undefined

// describe('Ejercicio 5 de 6 — tipos dinámicos', () => {
//     test('La lista contiene un objeto dado', () => {
//         const list = getProducts();

//         expect(list).toContainEqual({
//             id: 2,
//             name: 'Keyboard',
//             price: 1200
//         });
//     });
//     test('Existe una propiedad con valor de Monitor', () => {
//         const list = getProducts();

//         expect(list).toEqual(
//             expect.arrayContaining([
//                 expect.objectContaining({
//                     name: 'Monitor'
//                 })
//             ])
//         )
//     });
//      test('Comprovar que Mouse y Monitor esten en la lista', () => {
//         const list = getProducts();

//         expect(list).toEqual(
//             expect.arrayContaining([
//                 expect.objectContaining({
//                     name: 'Mouse'
//                 }),
//                 expect.objectContaining({
//                     name: 'Monitor'
//                 })
//             ])
//         )
//     });

    // test('La lista contiene Juan', () => {
    //     const list = getUsers();

    //     expect(list).toContain('Juan')
    // });
    // test('La lista contiene almenos Pedro y Luis', () => {
    //     const list = getUsers();

    //     expect(list).toEqual(
    //         expect.arrayContaining([
    //             'Pedro',
    //             'Luis'
    //         ])
    //     )
    // })

// describe('Ejercicio 2 de 6 — propiedad específica', () => {
//     test('Existe una propiedad llamada name', () => {
//         const product = createProduct();
//         expect(product).toHaveProperty('name');
//     });
//     test('La propiedad price tiene exactamente 4500', () => {
//         const product = createProduct();
//         expect(product.price).toBe(4500);
//     });
//      test('La propiedad available existe y es true', () => {
//         const product = createProduct();
//         expect(product).toEqual(
//             expect.objectContaining({
//                 details: expect.objectContaining({
//                     available:true
//                 })
//             })
//         )
//     });
// });

// describe('Ejercicio 6 de 6 — Reto final de test.each()', () => {
//     test.each([
//        {total:500, isPremium:false, result:150},
//        {total:1000, isPremium:false, result:0},
//        {total:1500, isPremium:false, result:0},
//        {total:500, isPremium:true, result:0},
//        {total:2000, isPremium:true, result:0},
//     ])('Total:$total, isPremium:$isPremium, resultado:$result', ({total, isPremium, result}) => {
//         expect(calculateShipping(total, isPremium)).toBe(result);
//     });
// });


// describe('Ejercicio 2 — Preparar una vez para todo el grupo', () => {
//     let connection:{ connected: boolean }

//     beforeAll(() => {
//         connection = createConnection();
//     });

//     afterAll(() => {
//         closeConnection(connection);
//         console.log(connection);
//     });

//     test('La coneción esta iniciada', () => {
//         expect(connection.connected).toBeTruthy();
//     });

//     test('La coneción esta iniciada', () => {
//         expect(connection.connected).toBeTruthy();
//     });
// });

// describe('Ejercicio 1 — Preparación independiente para cada test', () => {
//     let user:User;

//     beforeEach(() => {
//         user = createUser();
//     });

//     test('Termina con 100 puntos', () => {
//         addPoints(user, 100);

//         expect(user.points).toBe(100);
//     });

//     test('Termina con 50', () => {
//         expect(user.points).toBe(0);

//         addPoints(user, 50);
//         expect(user.points).toBe(50);

//     });
// });

// describe('Ejercicio 6 de 6 — reto final', () => {
   
//     test('Debe devolver 100 de forma temporal', () => {
//         const mockFn = jest.fn().mockReturnValue(100);

//         const result1 = mockFn();
//         expect(result1).toBe(100);

//         jest.clearAllMocks();

//         const result2 = mockFn();
//         expect(result2).toBe(100);

//         jest.resetAllMocks();
        
//         const result3 = mockFn();
//         expect(result3).toBeUndefined();  
//     });

//     test('Verifica que devuelve temporalmente 500 y después regresa el valor calculado', () => {
//         jest.spyOn(calculator, 'sum')
//             .mockReturnValue(500);
            
//         const result1 = calculator.sum(12, 33);
//         expect(result1).toBe(500);

//         jest.restoreAllMocks();
        
//         const result2 = calculator.sum(2, 3);
        
//         expect(result2).toBe(5);
//     });
// });

// jest.mock('./priceCalculator');

// const mockedCalculateDiscount =
//     jest.mocked(calculateDiscount);


// import { productService, priceCalculator } from "./calculator";

// describe('Ejercicios de jest.spyOn()', () => {
//     afterEach(() => {
//         jest.restoreAllMocks();
//     });
//     test('Prueba A', () => {
//         const spy = jest.spyOn(priceCalculator, 'calculateDiscount')

//         const result1 = productService.calculateFinalPrice(1000, 20);

//         expect(result1).toBe(800);
//         expect(spy).toHaveBeenCalled();
//         expect(spy).toHaveBeenCalledWith(1000, 20);
        
//     });
//      test('Prueba B', () => {
//         const spy = jest.spyOn(priceCalculator, 'calculateDiscount')
//         .mockReturnValue(300);

//         const result = productService.calculateFinalPrice(1000, 20);

//         expect(result).toBe(700);
//         expect(spy).toHaveBeenCalledWith(1000, 20);
        
//     });
//     test('Prueba C', () => {
//         const spy = jest.spyOn(priceCalculator, 'calculateDiscount')
//         .mockReturnValue(300);

//         const result1 = productService.calculateFinalPrice(1000, 20);

//         expect(result1).toBe(700);
//         expect(spy).toHaveBeenCalled();
//         expect(spy).toHaveBeenCalledWith(1000, 20);

//         spy.mockRestore();
//         const result2 = productService.calculateFinalPrice(1000, 20);
//         expect(result2).toBe(800);
//     });
// });
import { getProducts } from './userService';

describe('Ejercicio 4 de 6 — objetos dentro de un array', () => {
    test('La lista contiene un objeto dado', () => {
        const list = getProducts();

        expect(list).toContainEqual({
            id: 2,
            name: 'Keyboard',
            price: 1200
        });
    });
    test('La lista contiene Ana', () => {
        const list = getProducts();

        expect(list).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: 'Monitor'
                })
            ])
        )
    });
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
});

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
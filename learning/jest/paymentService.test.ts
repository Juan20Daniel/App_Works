import { calculateShipping } from './userService';

describe('Ejercicio 6 de 6 — Reto final de test.each()', () => {
    test.each([
       {total:500, isPremium:false, result:150},
       {total:1000, isPremium:false, result:0},
       {total:1500, isPremium:false, result:0},
       {total:500, isPremium:true, result:0},
       {total:2000, isPremium:true, result:0},
    ])('Total:$total, isPremium:$isPremium, resultado:$result', ({total, isPremium, result}) => {
        expect(calculateShipping(total, isPremium)).toBe(result);
    });
});


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
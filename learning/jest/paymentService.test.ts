import {calculator} from './userService';

describe('Restablecimiento de mocks con resetAllMocks', () => {

    const mockCalculateTax = jest.spyOn(calculator, 'sum')
        .mockReturnValue(500);

    test('Verificación de llamada', async () => {
        let result = calculator.sum(2, 3);
        expect(result).toBe(500);

        jest.restoreAllMocks();
        result = calculator.sum(2, 3);
        expect(result).toBe(5);
    });
});

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
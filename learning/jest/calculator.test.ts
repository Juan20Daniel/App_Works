import { generateOrderNumber } from "./calculator";

describe('Ejercicios de jest.spyOn()', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    // test('Ejercicio 1: observar un método real', () => {
    //     const spy = jest.spyOn(calculator, 'calculateTax');

    //     const result = calculator.calculateTotal(100);

    //     expect(spy).toHaveBeenCalledTimes(1);
    //     expect(spy).toHaveBeenCalledWith(100);
    //     expect(result).toBe(116)
    // });
    test('Ejercicio 5: una fecha controlada', () => {
        const spy = jest.spyOn(Date, 'now').mockReturnValue(100000);

        expect(generateOrderNumber()).toBe('ORDER-100000');

        spy.mockRestore();
    });
});
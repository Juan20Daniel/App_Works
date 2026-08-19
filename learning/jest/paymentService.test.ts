import { getUserById } from "./userApi";
import { getUserName } from "./userService";


jest.mock('./userApi', () => ({
    getUserById: jest.fn()
}));

const mockGetUserById = jest.mocked(getUserById);

describe('mockResolvedValue()', () => {
    test('Me regresa el nombre del usuario', async () => {
        mockGetUserById.mockResolvedValue({
            id: 10,
            name: 'Juan'
        });
        
        await expect(
            getUserName(10)
        ).resolves.toBe('Juan');
    });

    test('Propaga el error de forma correcta', async () => {
        mockGetUserById.mockRejectedValue(
            new Error('Error de servidor')
        );

        await expect(
            getUserName(10)
        ).rejects.toThrow('Error de servidor');
    })
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
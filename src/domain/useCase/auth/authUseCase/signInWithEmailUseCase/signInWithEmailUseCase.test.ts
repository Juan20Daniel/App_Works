import { AuthRepositoryMock, createAuthRepositoryMock, createAuthResultSimulation } from '@/domain/repositories';
import { signInWithEmailUseCase } from './signInWithEmailUseCase';
import { AppError } from '@/shared';

describe('signInWithEmailUseCase', () => {
    let repository: AuthRepositoryMock;

    beforeEach(() => {
        repository = createAuthRepositoryMock();
    })

    test('Lanza error con email inválido', async () => {
        await expect(signInWithEmailUseCase(
            repository,
            'juandanielgmail.com', 
            '12345678'
        )).rejects.toThrow('Error de validación en alguno de los campos');

        expect(repository.signInWithEmail).not.toHaveBeenCalled();
    });

    test('Lanzar error contraseña inválida', async () => {
        await expect(signInWithEmailUseCase(
            repository,
            'juandaniel@gmail.com', 
            '12'
        )).rejects.toThrow('Error de validación en alguno de los campos');

        expect(repository.signInWithEmail).not.toHaveBeenCalled();
    });

    test('Lanzar error con ambos campos inválidos', async () => {
        await expect(signInWithEmailUseCase(
            repository,
            'juandanielgmail.com', 
            '12'
        )).rejects.toThrow('Error de validación en alguno de los campos');

        expect(repository.signInWithEmail).not.toHaveBeenCalled();
    });

    test('Me devuelve el un resultado con el contenido correcto', async () => {
        const resultAuth = createAuthResultSimulation();

        repository.signInWithEmail.mockResolvedValue(resultAuth);

        const result = await signInWithEmailUseCase(repository, 'juandaniel@gmail.com','123456789');

        expect(repository.signInWithEmail).toHaveBeenCalledTimes(1);
        expect(repository.signInWithEmail).toHaveBeenCalledWith('juandaniel@gmail.com','123456789')
        expect(result).toEqual(resultAuth);
    });

    test('El caso de uso propaga correctamente el error lanzado por el repositorio', async () => {
        const repositoryError = new AppError(
            'BAD_REQUEST',
            'No fue posible conectar con el servidor'
        );

        repository.signInWithEmail.mockRejectedValue(repositoryError);

        await expect(signInWithEmailUseCase(
            repository,
            'juandaniel@gmail.com',
            '123456789'
        )).rejects.toBe(repositoryError);

        expect(repository.signInWithEmail).toHaveBeenCalledTimes(1);
        expect(repository.signInWithEmail).toHaveBeenCalledWith('juandaniel@gmail.com','123456789');
    });
});
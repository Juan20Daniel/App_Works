import { AuthRepositoryMock, createAuthRepositoryMock } from '@/domain/repositories';
import { signInWithEmailUseCase } from './signInWithEmailUseCase';
import { AuthEntity, UserEntity } from '@/domain/entities';
import { AppError } from '@/shared';


describe('signInWithEmailUseCase', () => {
    let repository: AuthRepositoryMock;

    beforeEach(() => {
        repository = createAuthRepositoryMock();
    })

    test('Verificar email y password válidos', async () => {
        await signInWithEmailUseCase(repository, 'juandaniel@gmail.com', '123456789');
        expect(repository.signInWithEmail).toHaveBeenCalledTimes(1);
        expect(repository.signInWithEmail).toHaveBeenCalledWith('juandaniel@gmail.com', '123456789')
    });

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

    test('Reporisotio inicia sin llamadas', () => {
        expect(repository.signInWithEmail).toHaveBeenCalledTimes(0);
    });

    test('Respuesta simulada', async () => {
        const resultAuth:{auth:AuthEntity, user:UserEntity} = {
            auth: {
                token:'ffdsfsdfr5f77kyu0a12dd4regg',
                refreshToken:'ffdsfsdfr5f77kyu0a12dd4regg',
            },
            user: {
                id: '4556632',
                firstname: 'juan Daniel',
                lastname: 'Morales Abarca',
                email: 'juandaniel@gmail.com',
                role: 'user',
                isActive: true,
                avatarColor: '#000000'
            }
        }

        repository.signInWithEmail.mockResolvedValue(resultAuth);

        const result = await signInWithEmailUseCase(repository, 'juandaniel@gmail.com','123456789');

        expect(repository.signInWithEmail).toHaveBeenCalledTimes(1);
        expect(repository.signInWithEmail).toHaveBeenCalledWith('juandaniel@gmail.com','123456789')
        expect(result).toEqual(resultAuth);
    });

    test('Respuesta diferente', async () => {
        const resultAuth:{auth:AuthEntity, user:UserEntity} = {
            auth: {
                token:'ffdsfsdfgbytjnmiuipa0a12dd4regg',
                refreshToken:'ffdsfs234br6kyu0a12dd4regg',
            },
            user: {
                id: '4556632',
                firstname: 'Fenando',
                lastname: 'Gonzalez Molina',
                email: 'gonzales@gmail.com',
                role: 'user',
                isActive: true,
                avatarColor: '#000000',
            }
        }

        repository.signInWithEmail.mockResolvedValueOnce(resultAuth);

        const result = await signInWithEmailUseCase(repository, 'gonzales@gmail.com', '123456789');

        expect(result).toEqual(resultAuth)
    });

    test('Deve devolver 2 respuestas y verificar que se ejecute 2 veces', async () => {
        const resultAuth1:{auth:AuthEntity, user:UserEntity} = {
            auth: {
                token:'ffdsfsdfr5f77kyu0a12dd4regg',
                refreshToken:'ffdsfsdfr5f77kyu0a12dd4regg',
            },
            user: {
                id: '4556632',
                firstname: 'juan Daniel',
                lastname: 'Morales Abarca',
                email: 'juandaniel@gmail.com',
                role: 'user',
                isActive: true,
                avatarColor: '#000000'
            }
        }
         const resultAuth2:{auth:AuthEntity, user:UserEntity} = {
            auth: {
                token:'ffdsfsdfgbytjnmiuipa0a12dd4regg',
                refreshToken:'ffdsfs234br6kyu0a12dd4regg',
            },
            user: {
                id: '4556632',
                firstname: 'Fenando',
                lastname: 'Gonzalez Molina',
                email: 'gonzales@gmail.com',
                role: 'user',
                isActive: true,
                avatarColor: '#000000',
            }
        }
        repository.signInWithEmail.mockResolvedValueOnce(resultAuth1).mockResolvedValueOnce(resultAuth2);

        const resul1 = await signInWithEmailUseCase(repository, 'juandaniel@gmail.com', '123456789');
        const resul2 = await signInWithEmailUseCase(repository, 'gonzales@gmail.com', '123456789');

        expect(resul1).toEqual(resultAuth1);
        expect(resul2).toEqual(resultAuth2);
        expect(repository.signInWithEmail).toHaveBeenCalledTimes(2);
    });

    test('Simular un error', async () => {
        const repositoryError = new Error(
            'No fue posible conectar con el servidor'
        );

        repository.signInWithEmail.mockRejectedValue(repositoryError);

        await expect(signInWithEmailUseCase(
            repository,
            'juandaniel@gmail.com',
            '123456789'
        )).rejects.toThrow()

        expect(repository.signInWithEmail).toHaveBeenCalledTimes(1);
        expect(repository.signInWithEmail).toHaveBeenCalledWith('juandaniel@gmail.com','123456789');
    });

    test('El caso de uso propaga correctamente el error lanzado por el repositorio', async () => {
        const repositoryError = new Error(
            'No fue posible conectar con el servidor'
        );

        repository.signInWithEmail.mockRejectedValue(repositoryError);

        await expect(signInWithEmailUseCase(
            repository,
            'juandaniel@gmail.com',
            '123456789'
        )).rejects.toBe(repositoryError);
    });

    test('Lanzar error personalizado con credenciales correctas y en una sola llamada.', async () => {
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
        expect(repository.signInWithEmail).toHaveBeenCalledWith('juandaniel@gmail.com','123456789')
    });

    test('Primer intento falla, segundo funciona', async () => {
        const repositoryError = new AppError(
            'BAD_REQUEST',
            'No fue posible conectar con el servidor'
        );

        const resultAuth:{auth:AuthEntity, user:UserEntity} = {
            auth: {
                token:'ffdsfsdfr5f77kyu0a12dd4regg',
                refreshToken:'ffdsfsdfr5f77kyu0a12dd4regg',
            },
            user: {
                id: '4556632',
                firstname: 'juan Daniel',
                lastname: 'Morales Abarca',
                email: 'juandaniel@gmail.com',
                role: 'user',
                isActive: true,
                avatarColor: '#000000'
            }
        }

        repository.signInWithEmail
            .mockRejectedValueOnce(repositoryError)
            .mockResolvedValueOnce(resultAuth)

        await expect(signInWithEmailUseCase(
            repository,
            'juandaniel@gmail.com',
            '123456789'
        )).rejects.toBe(repositoryError);

        const result = await signInWithEmailUseCase(
            repository,
            'juandaniel@gmail.com',
            '123456789'
        );

        expect(result).toEqual(resultAuth);
        expect(repository.signInWithEmail).toHaveBeenCalledTimes(2);
    });
});
import { AuthRepository } from '@/domain/repositories';
import { signInWithEmailUseCase } from './signInWithEmailUseCase';

describe('signInWithEmailUseCase', () => {
    let repository: AuthRepository;

    beforeEach(() => {
        repository = {
            registerWithEmail: jest.fn(),
            signInWithEmail: jest.fn(),
            continueWithGoogle: jest.fn(),
            continueWithFacebook: jest.fn(),
            getAuth: jest.fn(),
            signOut: jest.fn(),
            refreshSession: jest.fn(),
        }
    })

    test('Debe llamar al repositorio con credenciales válidas', async () => {

        await signInWithEmailUseCase(
            repository, 
            'juandaniel@gmail.com', 
            '12345678'
        );

        expect(repository.signInWithEmail).toHaveBeenCalledTimes(1);
    });

    test('Debe lanzar un error cuando el email es inválido', async () => {

        await expect(signInWithEmailUseCase(
            repository, 
            'juandanielgmail.com', 
            '12345678'
        )).rejects.toThrow('Error de validación en alguno de los campios');

        expect(repository.signInWithEmail).not.toHaveBeenCalled();
    });

    test('Debe lanzar un error cuando la contraseña es inválida', async () => {

        await expect(
            signInWithEmailUseCase(
                repository, 
                'juandaniel@gmail.com', 
                '12'
            )
        ).rejects.toThrow('Error de validación en alguno de los campios');

        expect(repository.signInWithEmail).not.toHaveBeenCalled();
    });
});
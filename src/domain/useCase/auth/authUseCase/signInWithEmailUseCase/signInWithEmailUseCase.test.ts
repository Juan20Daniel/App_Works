import { AuthRepositoryMock, createAuthRepositoryMock, createAuthResultSimulation } from '@/domain/repositories';
import { signInWithEmailUseCase } from './signInWithEmailUseCase';
import { AppError } from '@/shared';
type InvalidCredentialsCases = {
    esenary: string,
    email: string,
    password: string
}
const invalidCredentialsCases:InvalidCredentialsCases[] = [
    {
        esenary:'email inválido',
        email:'juandanielgmail.com',
        password:'123456789'
    },
    {
        esenary:'password inválido',
        email:'juandaniel@gmail.com',
        password:'12'
    },
    {
        esenary:'Email vacío + contraseña válida',
        email:'',
        password:'123456789'
    },
    {
        esenary:'Email válido + contraseña vacía',
        email:'juandaniel@gmail.com',
        password:''
    },
    {
        esenary: 'email y password inválido',
        email: 'juandanielgmail.com',
        password: '12'
    }
]
describe('signInWithEmailUseCase', () => {
    let repository: AuthRepositoryMock;

    beforeEach(() => {
        repository = createAuthRepositoryMock();
    });

    describe('Credenciales invalidas', () => {
        test.each(invalidCredentialsCases)('Debe lanzar error $esenary', async ({email, password}) => {
            await expect(
                signInWithEmailUseCase(repository, email, password)
            ).rejects.toThrow('Error de validación en alguno de los campos');
            
            expect(repository.signInWithEmail).not.toHaveBeenCalled();
        });
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

    test('Comprobación de diferentes mensajes', () => {
        const validateCredentials = (email: string,password: string) => {
            // Implementación sencilla para el ejercicio
        };
    })
});
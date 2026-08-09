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

    test('Devolver el email recibido', async () => {
        repository.signInWithEmail.mockImplementation(
            async (email) => {
                return createAuthResultSimulation({email});
            }
        );

        const result = await signInWithEmailUseCase(repository, 'juandaniel@gmail.com','123446789');

        expect(result.user.email).toBe('juandaniel@gmail.com')
    });

    test('Dos usuarios, mismo mock', async () => {
        const authResultJuan = createAuthResultSimulation({email:'juandaniel@gmail.com'});
        const authResultFernando = createAuthResultSimulation({email:'fernando@gmail.com'});
        const authResultError = new AppError('BAD_REQUEST', 'No se logró realizar la operación');

        repository.signInWithEmail.mockImplementation(
            async (email) => {
                if(email === 'juandaniel@gmail.com') {
                    return authResultJuan;
                }
                if(email === 'fernando@gmail.com') {
                    return authResultFernando;
                }
                
                throw authResultError;
            }
        );

        const result1 = await signInWithEmailUseCase(repository, 'juandaniel@gmail.com','123446789');
        const result2 = await signInWithEmailUseCase(repository, 'fernando@gmail.com','123446789');
        await expect(
            signInWithEmailUseCase(repository, 'elpepe@gmail.com','123446789')
        ).rejects.toBe(authResultError)

        expect(result1).toEqual(authResultJuan);
        expect(result2).toEqual(authResultFernando);
        expect(repository.signInWithEmail).toHaveBeenCalledWith('elpepe@gmail.com','123446789')
    });

    test('comprobar email y contraseña', async () => {
        const authResult = createAuthResultSimulation({email:'juan@gmail.com'});
        const authResultError = new AppError('BAD_REQUEST', 'Credenciales incorrectas');

        repository.signInWithEmail.mockImplementation(
            async (email, password) => {
                if(email === 'juan@gmail.com' && password === '123456789') {
                    return authResult;
                }
                
               throw authResultError;
            }
        );

        const result = await signInWithEmailUseCase(repository, 'juan@gmail.com','123456789');
       
        await expect(
            signInWithEmailUseCase(repository, 'elpepe@gmail.com','123456789')
        ).rejects.toBe(authResultError);

        expect(result).toEqual(authResult);
        expect(repository.signInWithEmail).toHaveBeenCalledWith('elpepe@gmail.com','123456789');
    });

    test('Prueba A', async () => {
        repository.signInWithEmail
            .mockResolvedValueOnce(createAuthResultSimulation({email:'juan@gmail.com'}))
            .mockResolvedValueOnce(createAuthResultSimulation({email:'pedro@gmail.com'}))
       

        const resultJuan = await signInWithEmailUseCase(repository, 'pedro@gmail.com','123456789');
        const resultPedro = await signInWithEmailUseCase(repository, 'juan@gmail.com','123456789');
       
        console.log(resultJuan);
        console.log(resultPedro);
    });
});
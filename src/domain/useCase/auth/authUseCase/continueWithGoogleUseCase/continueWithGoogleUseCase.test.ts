import { AuthRepositoryMock, createAuthRepositoryMock, createAuthResultSimulation } from "@/domain/repositories";
import { continueWithGoogleUseCase } from "./continueWithGoogleUseCase";
import { AppError } from "@/shared";

describe('continueWithGoogleUseCase', () => {
    let repository:AuthRepositoryMock;
    beforeEach(() => {
        repository = createAuthRepositoryMock();
    });

    test('El caso de uso devuelve una respuesta simulada y verifia que solo se ejecute continueWithGoogleUseCase', async () => {
        const authResult = createAuthResultSimulation();

        repository.continueWithGoogle.mockResolvedValue(authResult);

        const result = await continueWithGoogleUseCase(repository);

        expect(repository.continueWithGoogle).toHaveBeenCalledTimes(1);
        expect(result).toEqual(authResult);
        expect(result).toBe(authResult);
        expect(repository.signInWithEmail).not.toHaveBeenCalled();
        expect(repository.continueWithFacebook).not.toHaveBeenCalled();
    });

    test('Regresa una respuesta válida y correcta', async () => {
        const authResult = createAuthResultSimulation();

        repository.continueWithGoogle.mockResolvedValue(authResult);

        const result = await continueWithGoogleUseCase(repository);

        expect(result).toEqual(authResult);
    });

    test('Propaga el error', async () => {
        const authError = new AppError(
            'BAD_REQUEST',
            'El servidor no responde'
        );

        repository.continueWithGoogle.mockRejectedValue(authError);

        await expect(continueWithGoogleUseCase(repository)).rejects.not.toBe(authError);
    });

    test('El repositorio se llama una vez', async () => {
        await continueWithGoogleUseCase(repository);
        expect(repository.continueWithGoogle).toHaveBeenCalledTimes(1);
    });
});
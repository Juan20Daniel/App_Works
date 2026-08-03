import { AuthRepositoryMock } from "./types";

export const createAuthRepositoryMock = ():AuthRepositoryMock => ({
    registerWithEmail: jest.fn(),
    signInWithEmail: jest.fn(),
    continueWithGoogle: jest.fn(),
    continueWithFacebook: jest.fn(),
    getAuth: jest.fn(),
    signOut: jest.fn(),
    refreshSession: jest.fn(),
});
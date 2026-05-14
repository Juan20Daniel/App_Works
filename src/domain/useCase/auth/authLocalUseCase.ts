import { AuthRepositoryImpl } from "@/data/repositories";
import { AuthEntity } from "@/domain/entities";

export const getAuthLocalStorageUseCase = async (repo:AuthRepositoryImpl): Promise<AuthEntity | null> => {
    return await repo.getAuth();
}
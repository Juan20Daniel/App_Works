import { AuthLocalService, AuthService } from "@/data/datasource";
import { AuthRepositoryImpl } from "@/data/repositories";
import { AsyncStorageAdapter } from "@/data/storage";

export const authRepositoryImpl = new AuthRepositoryImpl(
    new AuthService(),
    new AuthLocalService(
        new AsyncStorageAdapter()
    )
);
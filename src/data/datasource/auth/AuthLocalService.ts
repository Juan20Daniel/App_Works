import { AsyncStorageAdapter } from "@/data/storage";
import { AuthEntity } from "@/domain/entities";
import { STORAGE_KEYS } from "@/shared/constants";

export class AuthLocalService {
    constructor(private storage:AsyncStorageAdapter) {}
    
    async saveAuth(auth:AuthEntity) {
        await this.storage.save(STORAGE_KEYS.AUTH, JSON.stringify(auth));
    }

    async getAuth():Promise<AuthEntity | null> {
        const auth = await this.storage.get<string>(STORAGE_KEYS.AUTH);
        if(!auth) {
            return null;
        }

        return JSON.parse(auth);
    }

    async removeAuth() {
        await this.storage.remove(STORAGE_KEYS.AUTH);
    }
}
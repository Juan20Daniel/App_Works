import { SecureStorageAdapter } from "@/data/storage";
import { AuthEntity } from "@/domain/entities";
import { STORAGE_KEYS } from "@/shared/constants";

export class AuthLocalService {
    constructor(private storage:SecureStorageAdapter) {}
    
    async saveAuth(auth:AuthEntity) {
        await this.storage.save(STORAGE_KEYS.AUTH, auth);
    }

    async getAuth():Promise<AuthEntity | null> {
        const auth = await this.storage.get<AuthEntity>(STORAGE_KEYS.AUTH);
        if(!auth) {
            return null;
        }
        
        return auth
    }

    async removeAuth() {
        await this.storage.remove(STORAGE_KEYS.AUTH);
    }
}
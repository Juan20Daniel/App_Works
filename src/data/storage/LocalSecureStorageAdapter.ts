import * as Keychain from "react-native-keychain";

export class SecureStorageAdapter {
    async save<T>(key:string, data:T) {
        await Keychain.setGenericPassword(key, JSON.stringify(data), {service:key});
    }

    async get<T>(key:string):Promise<T|null> {
        try {
            const credentials = await Keychain.getGenericPassword({service:key});

            if(!credentials) return null;
            
            return JSON.parse(credentials.password) as T;
        } catch (error) {
            throw error;
        }
    }

    async remove(key:string) {
        await Keychain.resetGenericPassword({service:key});
    }
}
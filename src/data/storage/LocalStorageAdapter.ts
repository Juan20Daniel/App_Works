import { createAsyncStorage } from "@react-native-async-storage/async-storage";

const storage = createAsyncStorage("appDB");

export class AsyncStorageAdapter {

    async save<T>(key:string, data:T) {
        await storage.setItem(key, JSON.stringify(data));
    }

    async get<T>(key:string):Promise<T | null> {
        const result = await storage.getItem(key);

        if(!result) {
            return null;
        }

        return JSON.parse(result);
    }

    async remove(key:string) {
        await storage.removeItem(key);
    }
}
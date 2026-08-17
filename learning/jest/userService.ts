import { getUserById } from './userApi';

export const getUserName = async (id: number) => {
    try {
        const user = await getUserById(id);

        return user.name;
    } catch {
        return 'Usuario no encontrado';
    }
};
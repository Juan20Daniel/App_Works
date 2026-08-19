import { getUserById } from './userApi';

export const getUserGreeting = async (id: number) => {
    const user = await getUserById(id);

    return `Hola ${user.name}`;
};
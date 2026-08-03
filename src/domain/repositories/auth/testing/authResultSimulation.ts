import { AuthEntity, UserEntity } from "@/domain/entities";

export const createAuthResultSimulation = (
    
):{auth:AuthEntity, user:UserEntity} => ({
    auth: {
        token:'ffdsfsdfr5f77kyu0a12dd4regg',
        refreshToken:'ffdsfsdfr5f77kyu0a12dd4regg',
    },
    user: {
        id: '4556632',
        firstname: 'juan Daniel',
        lastname: 'Morales Abarca',
        email: 'juandaniel@gmail.com',
        role: 'user',
        isActive: true,
        avatarColor: '#000000'
    }
});
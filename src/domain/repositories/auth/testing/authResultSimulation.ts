import { AuthEntity, UserEntity } from "@/domain/entities";

type UserParams = {
    firstname?: string;
    lastname?: string;
    email?: string;
    role?: string;
}

export const createAuthResultSimulation = (
    user?:UserParams
):{auth:AuthEntity, user:UserEntity} => {
    const authResult = {
        auth: {
            token:'ffdsfsdfr5f77kyu0a12dd4regg',
            refreshToken:'ffdsfsdfr5f77kyu0a12dd4regg',
        },
        user: {
            id: '4556632',
            isActive: true,
            avatarColor: '#000000'
        }
    }
    if(!user) return {
        ...authResult,
        user: {
            ...authResult.user,
            firstname: 'Nombre de Prueba',
            lastname: 'Apellido de Prueba',
            email: 'correodeprueba@gmail.com',
            role: 'roldeprueba',
        }
    }
    return {
        ...authResult,
        user: {
            ...authResult.user,
            firstname: user.firstname??'Nombre de Prueba',
            lastname: user.lastname??'Apellido de Prueba',
            email: user.email??'correodeprueba@gmail.com',
            role: user.role??'roldeprueba',
        }
    }
}   

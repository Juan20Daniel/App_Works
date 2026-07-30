export interface UserEntity {
    id: string;
    profile_image?: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    isActive: boolean;
    provider?: string;
    provider_id?: string;
    avatarColor: string;
}
export interface AuthAPIResponse {
    message:      string;
    user:         UserApi;
    auth:         AuthApi;
}

export interface AuthApi {
    token:        string;
    refreshToken: string;
}

export interface UserApi {
    _id:            string;
    firstname:      string;
    lastname:       string;
    email:          string;
    role:           string;
    isActive:       boolean;
    profile_image?: string;
    provider?:      string;
    provider_id?:   string;
    avatarColor:    string;
}
export interface AuthAPIResponse {
    message: string;
    user:    UserApi;
    token:   string;
}

export interface UserApi {
    _id:       string;
    firstname: string;
    lastname:  string;
    phone:     string;
    email:     string;
    role:      string;
    isActive:  boolean;
}
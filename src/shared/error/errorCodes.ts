export type ErrorCodes =
    //  Backend
    |   'VALIDATION'
    |   'BAD_REQUEST'
    |   'DUPLICATE_EMAIL'
    |   'DUPLICATE_PHONE'
    |   'UNAUTHORIZED'
    |   'NOT_FOUND'
    |   'INTERNAL_SERVER'
    |   'FORBIDDEN'
    
    //  Axios
    |   'NETWORK_ERROR'
    |   'TIMEOUT'
    
    // Facebook
    | 'FACEBOOK_CANCELLED'
    | 'FACEBOOK_NO_ACCESS_TOKEN'
    | 'FACEBOOK_UNKNOWN_ERR'

    // Google
    | 'GOOGLE_CANCELLED'
    | 'GOOGLE_NO_ID_TOKEN'
    | 'GOOGLE_UNKNOWN_ERR'

    // General
    |   'UNKNOWN_ER'

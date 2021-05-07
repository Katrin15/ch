export interface User {
    id?: string;
    email: string;
    password?:string;
    firstname?: string,
    lastname?: string;
    role?: string;
    googleId?: string;
    facebookId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    picture?: string;
    accessToken?: string;
    accessTokenExpiration?: Date;
    provider?: string;
 }
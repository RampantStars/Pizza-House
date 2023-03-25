import { Role } from './../../role/entities/role.entity';
export declare class User {
    id: number;
    login: string;
    password: string;
    email: string;
    address: string;
    roles: Role[];
}

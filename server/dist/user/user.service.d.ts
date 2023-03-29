import { UserRoleDto } from './dto/UserRole.dto';
import { RoleService } from './../role/role.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    private readonly roleService;
    constructor(userRepository: Repository<User>, roleService: RoleService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    setRole(userRoleDto: UserRoleDto): Promise<User>;
    findAllUser(): Promise<User[]>;
    findOneUser(id: number): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    removeUser(id: number): Promise<User>;
    removeRole(userRoleDto: UserRoleDto): Promise<User>;
}

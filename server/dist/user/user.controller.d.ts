import { UserRoleDto } from './dto/UserRole.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    setRoles(dto: UserRoleDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    removeRole(dto: UserRoleDto): Promise<User>;
    remove(id: string): Promise<User>;
}

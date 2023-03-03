import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    createRole(CreateRoleDto: CreateRoleDto): Promise<Role>;
    findAllRole(): Promise<Role[]>;
    findOneRole(id: number): Promise<Role | null>;
    updateRole(id: number, updateRoleDto: UpdateRoleDto): Promise<Role>;
    removeRole(id: number): Promise<Role>;
}

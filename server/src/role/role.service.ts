import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async createRole(CreateRoleDto: CreateRoleDto): Promise<Role> {
    const role = await this.roleRepository.create(CreateRoleDto);
    return this.roleRepository.save(role);
  }

  async findAllRole(): Promise<Role[]> {
    const roles = await this.roleRepository.find();
    return roles;
  }

  async findOneRole(id: number): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role) {
      throw new NotFoundException(`Role with ID=${id} not found`);
    }
    return role;
  }

  async updateRole(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.roleRepository.preload({
      id: id,
      ...updateRoleDto,
    });
    if (!role) {
      throw new NotFoundException(`Role with ID=${id} not found`);
    }
    return this.roleRepository.save(role);
  }

  async removeRole(id: number): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role) {
      throw new NotFoundException(`Role with ID=${id} not found`);
    }
    return this.roleRepository.remove(role);
  }
}

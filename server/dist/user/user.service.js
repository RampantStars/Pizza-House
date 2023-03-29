"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const role_service_1 = require("./../role/role.service");
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository, roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }
    async createUser(createUserDto) {
        const user = await this.userRepository.create(createUserDto);
        const role = await this.roleService.findOneRoleByValue('USER');
        user.roles = [role];
        return this.userRepository.save(user);
    }
    async setRole(userRoleDto) {
        const user = await this.userRepository.findOne({
            where: { id: userRoleDto.userId },
            relations: { roles: true },
        });
        const role = await this.roleService.findOneRole(userRoleDto.roleId);
        if (role && user) {
            user.roles.push(role);
            return this.userRepository.save(user);
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async findAllUser() {
        const users = await this.userRepository.find({
            relations: { roles: true },
        });
        return users;
    }
    async findOneUser(id) {
        const user = await this.userRepository.findOne({
            where: { id: id },
            relations: { roles: true },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID=${id} not found`);
        }
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email: email },
            relations: { roles: true },
        });
        return user;
    }
    async updateUser(id, updateUserDto) {
        const user = await this.userRepository.preload(Object.assign({ id: id }, updateUserDto));
        if (!user) {
            throw new common_1.NotFoundException(`User with ID=${id} not found`);
        }
        return this.userRepository.save(user);
    }
    async removeUser(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID=${id} not found`);
        }
        return this.userRepository.remove(user);
    }
    async removeRole(userRoleDto) {
        const user = await this.userRepository.findOne({
            where: { id: userRoleDto.userId },
            relations: { roles: true },
        });
        const role = await this.roleService.findOneRole(userRoleDto.roleId);
        if (role && user) {
            user.roles = user.roles.filter((r) => r.id !== role.id);
            return this.userRepository.save(user);
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        role_service_1.RoleService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
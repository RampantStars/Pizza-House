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
exports.UserController = void 0;
const UserRole_dto_1 = require("./dto/UserRole.dto");
const user_entity_1 = require("./entities/user.entity");
const dist_1 = require("@nestjs/swagger/dist");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    setRoles(dto) {
        return this.userService.setRole(dto);
    }
    findAll() {
        return this.userService.findAllUser();
    }
    findOne(id) {
        return this.userService.findOneUser(+id);
    }
    update(id, updateUserDto) {
        return this.userService.updateUser(+id, updateUserDto);
    }
    removeRole(dto) {
        return this.userService.removeRole(dto);
    }
    remove(id) {
        return this.userService.removeUser(+id);
    }
};
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Создание пользователя' }),
    (0, dist_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Добавление роли' }),
    (0, dist_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Post)('/role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserRole_dto_1.UserRoleDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "setRoles", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение пользователей' }),
    (0, dist_1.ApiResponse)({ status: 200, type: [user_entity_1.User] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение пользователя' }),
    (0, dist_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Изменение пользователя' }),
    (0, dist_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Убрать роль' }),
    (0, dist_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Delete)('/role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserRole_dto_1.UserRoleDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeRole", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Удаление пользователя' }),
    (0, dist_1.ApiResponse)({ status: 204, type: user_entity_1.User }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, dist_1.ApiTags)('Пользователи'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
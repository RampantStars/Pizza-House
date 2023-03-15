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
exports.TypeIngredientController = void 0;
const common_1 = require("@nestjs/common");
const type_ingredient_service_1 = require("./type-ingredient.service");
const create_type_ingredient_dto_1 = require("./dto/create-type-ingredient.dto");
const update_type_ingredient_dto_1 = require("./dto/update-type-ingredient.dto");
let TypeIngredientController = class TypeIngredientController {
    constructor(typeIngredientService) {
        this.typeIngredientService = typeIngredientService;
    }
    create(createTypeIngredientDto) {
        return this.typeIngredientService.createTypeIngredient(createTypeIngredientDto);
    }
    findAll() {
        return this.typeIngredientService.findAllTypeIngredient();
    }
    findOne(id) {
        return this.typeIngredientService.findOneTypeIngredient(+id);
    }
    update(id, updateTypeIngredientDto) {
        return this.typeIngredientService.updateTypeIngredient(+id, updateTypeIngredientDto);
    }
    remove(id) {
        return this.typeIngredientService.removeTypeIngredient(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_ingredient_dto_1.CreateTypeIngredientDto]),
    __metadata("design:returntype", void 0)
], TypeIngredientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeIngredientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeIngredientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_type_ingredient_dto_1.UpdateTypeIngredientDto]),
    __metadata("design:returntype", void 0)
], TypeIngredientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeIngredientController.prototype, "remove", null);
TypeIngredientController = __decorate([
    (0, common_1.Controller)('typeIngredient'),
    __metadata("design:paramtypes", [type_ingredient_service_1.TypeIngredientService])
], TypeIngredientController);
exports.TypeIngredientController = TypeIngredientController;
//# sourceMappingURL=type-ingredient.controller.js.map
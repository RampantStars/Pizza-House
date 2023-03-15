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
exports.TypeIngredientService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const type_ingredient_entity_1 = require("./entities/type-ingredient.entity");
const common_1 = require("@nestjs/common");
let TypeIngredientService = class TypeIngredientService {
    constructor(typeIngredientRepository) {
        this.typeIngredientRepository = typeIngredientRepository;
    }
    async createTypeIngredient(createTypeIngredientDto) {
        const typeIngredient = await this.typeIngredientRepository.create(createTypeIngredientDto);
        return this.typeIngredientRepository.save(typeIngredient);
    }
    async findAllTypeIngredient() {
        const typeIngredients = await this.typeIngredientRepository.find();
        return typeIngredients;
    }
    async findOneTypeIngredient(id) {
        const typeIngredient = await this.typeIngredientRepository.findOneBy({
            id,
        });
        if (!typeIngredient) {
            throw new common_1.NotFoundException(`TypeIngredient with ID=${id} not found`);
        }
        return typeIngredient;
    }
    async updateTypeIngredient(id, updateTypeIngredientDto) {
        const typeIngredient = await this.typeIngredientRepository.preload(Object.assign({ id: id }, updateTypeIngredientDto));
        if (!typeIngredient) {
            throw new common_1.NotFoundException(`TypeIngredient with ID=${id} not found`);
        }
        return this.typeIngredientRepository.save(typeIngredient);
    }
    async removeTypeIngredient(id) {
        const typeIngredient = await this.typeIngredientRepository.findOneBy({
            id,
        });
        if (!typeIngredient) {
            throw new common_1.NotFoundException(`TypeIngredient with ID=${id} not found`);
        }
        return this.typeIngredientRepository.remove(typeIngredient);
    }
};
TypeIngredientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(type_ingredient_entity_1.TypeIngredient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeIngredientService);
exports.TypeIngredientService = TypeIngredientService;
//# sourceMappingURL=type-ingredient.service.js.map
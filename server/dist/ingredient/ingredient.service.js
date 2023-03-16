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
exports.IngredientService = void 0;
const type_ingredient_service_1 = require("./../type-ingredient/type-ingredient.service");
const ingredient_entity_1 = require("./entities/ingredient.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const fs_1 = require("fs");
let IngredientService = class IngredientService {
    constructor(ingredientRepository, typeIngredientService) {
        this.ingredientRepository = ingredientRepository;
        this.typeIngredientService = typeIngredientService;
    }
    async createIngredient(createIngredientDto, image) {
        const type = await this.typeIngredientService.findOneTypeIngredient(createIngredientDto.typeIngredientId);
        if (!type) {
            throw new common_1.NotFoundException(`Ingredient with not found`);
        }
        const ingredient = this.ingredientRepository.create(Object.assign(Object.assign({}, createIngredientDto), { imageUrl: image.filename, typeIngredient: type }));
        return this.ingredientRepository.save(ingredient);
    }
    async findAllIngredients() {
        const ingredients = await this.ingredientRepository.find({
            relations: { typeIngredient: true },
        });
        return ingredients;
    }
    async findOneIngredient(id) {
        const ingredient = await this.ingredientRepository.findOne({
            where: { id: id },
            relations: { typeIngredient: true },
        });
        if (!ingredient) {
            throw new common_1.NotFoundException(`Ingredient with ID=${id} not found`);
        }
        return ingredient;
    }
    async updateIngredient(id, updateIngredientDto, image) {
        const ingredient = await this.ingredientRepository.preload(Object.assign({ id: id }, updateIngredientDto));
        if (!ingredient) {
            throw new common_1.NotFoundException(`Ingredient with ID=${id} not found`);
        }
        if (updateIngredientDto.typeIngredientId) {
            const type = await this.typeIngredientService.findOneTypeIngredient(updateIngredientDto.typeIngredientId);
            if (!type) {
                throw new common_1.NotFoundException(`Ingredient with not found`);
            }
            ingredient.typeIngredient = type;
        }
        if (image) {
            (0, fs_1.unlink)(`./uploads/${ingredient.imageUrl}`, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('file deleted');
            });
            ingredient.imageUrl = image.filename;
        }
        return this.ingredientRepository.save(ingredient);
    }
    async removeIngredient(id) {
        const ingredient = await this.ingredientRepository.findOneBy({ id });
        if (!ingredient) {
            throw new common_1.NotFoundException(`Ingredient with ID=${id} not found`);
        }
        return this.ingredientRepository.remove(ingredient);
    }
};
IngredientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ingredient_entity_1.Ingredient)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        type_ingredient_service_1.TypeIngredientService])
], IngredientService);
exports.IngredientService = IngredientService;
//# sourceMappingURL=ingredient.service.js.map
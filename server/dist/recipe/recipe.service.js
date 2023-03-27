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
exports.RecipeService = void 0;
const fs_1 = require("fs");
const dough_type_entity_1 = require("./../dough-type/entities/dough-type.entity");
const size_entity_1 = require("./../size/entities/size.entity");
const ingredient_entity_1 = require("./../ingredient/entities/ingredient.entity");
const recipe_entity_1 = require("./entities/recipe.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RecipeService = class RecipeService {
    constructor(ingredientRepository, sizeRepository, doughtTypeRepository, recipeRepository) {
        this.ingredientRepository = ingredientRepository;
        this.sizeRepository = sizeRepository;
        this.doughtTypeRepository = doughtTypeRepository;
        this.recipeRepository = recipeRepository;
    }
    async createRecipe(createRecipeDto) {
        const ingredients = (await Promise.all(createRecipeDto.ingredients.map((ingredientName) => this.ingredientRepository.findOne({ where: { name: ingredientName } }))));
        const sizes = (await Promise.all(createRecipeDto.sizes.map((sizeName) => this.sizeRepository.findOne({ where: { name: sizeName } }))));
        const doughtTypes = (await Promise.all(createRecipeDto.doughTypes.map((doughtTypeName) => this.doughtTypeRepository.findOne({ where: { name: doughtTypeName } }))));
        if (!ingredients || !sizes || !doughtTypes) {
            throw new common_1.NotFoundException(`Ошибка в поиске`);
        }
        const recipe = this.recipeRepository.create({
            name: createRecipeDto.name,
            description: createRecipeDto.description,
            imageUrl: createRecipeDto.imageUrl,
            salePercent: createRecipeDto.salePercent,
        });
        recipe.ingredients = [...ingredients];
        recipe.sizes = [...sizes];
        recipe.doughtTypes = [...doughtTypes];
        return this.recipeRepository.save(recipe);
    }
    async findAllRecipe() {
        const recipes = await this.recipeRepository.find({
            relations: { ingredients: true, doughtTypes: true, sizes: true },
        });
        return recipes;
    }
    async findOneRecipe(id) {
        const recipe = await this.recipeRepository.findOne({
            where: { id: id },
            relations: { ingredients: true, doughtTypes: true, sizes: true },
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with ID=${id} not found`);
        }
        return recipe;
    }
    async updateRecipe(id, updateRecipeDto) {
        const recipe = await this.recipeRepository.preload({
            id: id,
            name: updateRecipeDto.name,
            description: updateRecipeDto.description,
            imageUrl: updateRecipeDto.imageUrl,
            salePercent: updateRecipeDto.salePercent,
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with ID=${id} not found`);
        }
        if (updateRecipeDto.ingredients) {
            const ingredients = (await Promise.all(updateRecipeDto.ingredients.map((ingredientName) => this.ingredientRepository.findOne({
                where: { name: ingredientName },
            }))));
            if (!ingredients) {
                throw new common_1.NotFoundException(`Ingredient with not found`);
            }
            recipe.ingredients = [...ingredients];
        }
        if (updateRecipeDto.sizes) {
            const sizes = (await Promise.all(updateRecipeDto.sizes.map((sizeName) => this.sizeRepository.findOne({ where: { name: sizeName } }))));
            if (!sizes) {
                throw new common_1.NotFoundException(`Ingredient with not found`);
            }
            recipe.sizes = [...sizes];
        }
        if (updateRecipeDto.doughTypes) {
            const doughtTypes = (await Promise.all(updateRecipeDto.doughTypes.map((doughtTypeName) => this.doughtTypeRepository.findOne({
                where: { name: doughtTypeName },
            }))));
            if (!doughtTypes) {
                throw new common_1.NotFoundException(`Ingredient with not found`);
            }
            recipe.doughtTypes = [...doughtTypes];
        }
        if (updateRecipeDto) {
            (0, fs_1.unlink)(`./uploads/${recipe.imageUrl}`, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('file deleted');
            });
        }
        return this.recipeRepository.save(recipe);
    }
    async removeRecipe(id) {
        const recipe = await this.recipeRepository.findOneBy({ id });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with ID=${id} not found`);
        }
        (0, fs_1.unlink)(`./uploads/${recipe.imageUrl}`, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('file deleted');
        });
        return this.recipeRepository.remove(recipe);
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ingredient_entity_1.Ingredient)),
    __param(1, (0, typeorm_1.InjectRepository)(size_entity_1.Size)),
    __param(2, (0, typeorm_1.InjectRepository)(dough_type_entity_1.DoughType)),
    __param(3, (0, typeorm_1.InjectRepository)(recipe_entity_1.Recipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map
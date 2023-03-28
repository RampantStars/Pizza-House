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
exports.PizzaVariationService = void 0;
const additional_ingredient_service_1 = require("./../additional-ingredient/additional-ingredient.service");
const recipe_service_1 = require("./../recipe/recipe.service");
const dough_type_service_1 = require("./../dough-type/dough-type.service");
const size_service_1 = require("./../size/size.service");
const pizza_variation_entity_1 = require("./entities/pizza-variation.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PizzaVariationService = class PizzaVariationService {
    constructor(pizzaVariationRepository, sizeService, doughtTypeService, recipeService, additionalIngredientService) {
        this.pizzaVariationRepository = pizzaVariationRepository;
        this.sizeService = sizeService;
        this.doughtTypeService = doughtTypeService;
        this.recipeService = recipeService;
        this.additionalIngredientService = additionalIngredientService;
    }
    async createPizzaVariation(createPizzaVariationDto) {
        const additionalIngredients = (await Promise.all(createPizzaVariationDto.additionalIngredientsId.map((ingredientNameId) => this.additionalIngredientService.findOneAdditionalIngredient(ingredientNameId))));
        const doughType = await this.doughtTypeService.findOneDoughType(createPizzaVariationDto.doughTypeId);
        const size = await this.sizeService.findOneSize(createPizzaVariationDto.sizeId);
        const recipe = await this.recipeService.findOneRecipe(createPizzaVariationDto.recipeId);
        const pizzaVariation = await this.pizzaVariationRepository.create(Object.assign(Object.assign({}, createPizzaVariationDto), { additionalIngredients: additionalIngredients, doughType: doughType, size: size, recipe: recipe }));
        return this.pizzaVariationRepository.save(pizzaVariation);
    }
    async findAllPizzaVariation() {
        const pizzaVariations = await this.pizzaVariationRepository.find({
            relations: ['recipe', 'doughType', 'size', 'additionalIngredients'],
        });
        return pizzaVariations;
    }
    async findOnePizzaVariation(id) {
        const pizzaVariation = await this.pizzaVariationRepository.findOne({
            where: { id: id },
            relations: ['recipe', 'doughType', 'size', 'additionalIngredients'],
        });
        if (!pizzaVariation) {
            throw new common_1.NotFoundException(`PizzaVariation with ID=${id} not found`);
        }
        return pizzaVariation;
    }
    async updatePizzaVariation(id, updatePizzaVariationDto) {
        const pizzaVariation = await this.pizzaVariationRepository.preload(Object.assign({ id: id }, updatePizzaVariationDto));
        if (!pizzaVariation) {
            throw new common_1.NotFoundException(`PizzaVariation with ID=${id} not found`);
        }
        if (updatePizzaVariationDto.additionalIngredientsId) {
            const additionalIngredients = (await Promise.all(updatePizzaVariationDto.additionalIngredientsId.map((ingredientNameId) => this.additionalIngredientService.findOneAdditionalIngredient(ingredientNameId))));
            if (!additionalIngredients) {
                throw new common_1.NotFoundException(`Ingredient with not found`);
            }
            pizzaVariation.additionalIngredients = [...additionalIngredients];
        }
        if (updatePizzaVariationDto.doughTypeId) {
            const doughType = await this.doughtTypeService.findOneDoughType(updatePizzaVariationDto.doughTypeId);
            if (!doughType) {
                throw new common_1.NotFoundException(`DoughType with ID=${id} not found`);
            }
            pizzaVariation.doughType = doughType;
        }
        if (updatePizzaVariationDto.sizeId) {
            const size = await this.sizeService.findOneSize(updatePizzaVariationDto.sizeId);
            if (!size) {
                throw new common_1.NotFoundException(`Size with ID=${id} not found`);
            }
            pizzaVariation.size = size;
        }
        if (updatePizzaVariationDto.recipeId) {
            const recipe = await this.recipeService.findOneRecipe(updatePizzaVariationDto.recipeId);
            if (!recipe) {
                throw new common_1.NotFoundException(`Recipe with ID=${id} not found`);
            }
            pizzaVariation.recipe = recipe;
        }
        return this.pizzaVariationRepository.save(pizzaVariation);
    }
    async removePizzaVariation(id) {
        const pizzaVariation = await this.pizzaVariationRepository.findOneBy({
            id,
        });
        if (!pizzaVariation) {
            throw new common_1.NotFoundException(`PizzaVariation with ID=${id} not found`);
        }
        return this.pizzaVariationRepository.remove(pizzaVariation);
    }
};
PizzaVariationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pizza_variation_entity_1.PizzaVariation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        size_service_1.SizeService,
        dough_type_service_1.DoughTypeService,
        recipe_service_1.RecipeService,
        additional_ingredient_service_1.AdditionalIngredientService])
], PizzaVariationService);
exports.PizzaVariationService = PizzaVariationService;
//# sourceMappingURL=pizza-variation.service.js.map
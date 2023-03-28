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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaVariation = void 0;
const recipe_entity_1 = require("./../../recipe/entities/recipe.entity");
const dough_type_entity_1 = require("./../../dough-type/entities/dough-type.entity");
const size_entity_1 = require("./../../size/entities/size.entity");
const additional_ingredient_entity_1 = require("./../../additional-ingredient/entities/additional-ingredient.entity");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let PizzaVariation = class PizzaVariation {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PizzaVariation.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '640',
        description: 'Стоимость собранной пиццы идентификатор',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PizzaVariation.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [additional_ingredient_entity_1.AdditionalIngredient],
        description: 'Массив дополнительных ингредиентов',
    }),
    (0, typeorm_1.ManyToMany)(() => additional_ingredient_entity_1.AdditionalIngredient, { nullable: true, cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], PizzaVariation.prototype, "additionalIngredients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: size_entity_1.Size,
        description: 'Размер выбранной пиццы',
    }),
    (0, typeorm_1.ManyToOne)(() => size_entity_1.Size, (size) => size.pizzaVariations, {
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", size_entity_1.Size)
], PizzaVariation.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: dough_type_entity_1.DoughType,
        description: 'Тип выбранной пиццы',
    }),
    (0, typeorm_1.ManyToOne)(() => dough_type_entity_1.DoughType, (doughType) => doughType.pizzaVariations, {
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", dough_type_entity_1.DoughType)
], PizzaVariation.prototype, "doughType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: recipe_entity_1.Recipe,
        description: 'Рецепт выбранной пиццы',
    }),
    (0, typeorm_1.ManyToOne)(() => recipe_entity_1.Recipe, (recipe) => recipe.pizzaVariations, {
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", recipe_entity_1.Recipe)
], PizzaVariation.prototype, "recipe", void 0);
PizzaVariation = __decorate([
    (0, typeorm_1.Entity)()
], PizzaVariation);
exports.PizzaVariation = PizzaVariation;
//# sourceMappingURL=pizza-variation.entity.js.map
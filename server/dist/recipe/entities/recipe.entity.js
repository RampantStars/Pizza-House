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
exports.Recipe = void 0;
const pizza_variation_entity_1 = require("./../../pizza-variation/entities/pizza-variation.entity");
const ingredient_entity_1 = require("./../../ingredient/entities/ingredient.entity");
const dough_type_entity_1 = require("./../../dough-type/entities/dough-type.entity");
const size_entity_1 = require("./../../size/entities/size.entity");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Recipe = class Recipe {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Пицца 4 перца',
        description: 'Название рецепта пиццы',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '350',
        description: 'Стоимость рецепта пиццы',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Recipe.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'url',
        description: 'Изображение пиццы',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Для тех кто любит поострей',
        description: 'Описание пиццы',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10',
        description: 'Процент скидки на пиццу пиццы',
    }),
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Recipe.prototype, "salePercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [size_entity_1.Size],
        example: size_entity_1.Size,
        description: 'Какие размеры будут в данном рецепте у пиццы',
    }),
    (0, typeorm_1.ManyToMany)(() => size_entity_1.Size, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Recipe.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [dough_type_entity_1.DoughType],
        example: dough_type_entity_1.DoughType,
        description: 'Какие типы теста будут в данном рецепте у пиццы',
    }),
    (0, typeorm_1.ManyToMany)(() => dough_type_entity_1.DoughType, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Recipe.prototype, "doughtTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ingredient_entity_1.Ingredient],
        example: ingredient_entity_1.Ingredient,
        description: 'Какие ингредиенты будут в данном рецепте у пиццы',
    }),
    (0, typeorm_1.ManyToMany)(() => ingredient_entity_1.Ingredient, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pizza_variation_entity_1.PizzaVariation, (pizzaVariation) => pizzaVariation.recipe, {
        nullable: true,
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Recipe.prototype, "pizzaVariations", void 0);
Recipe = __decorate([
    (0, typeorm_1.Entity)()
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.entity.js.map
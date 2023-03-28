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
exports.CreateRecipeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRecipeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'Пицца 4 перца', description: 'Название рецепта пиццы' }),
    __metadata("design:type", String)
], CreateRecipeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '350', description: 'Стоимость рецепта пиццы' }),
    __metadata("design:type", Number)
], CreateRecipeDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'url',
        description: 'Изображение пиццы',
        required: false,
    }),
    __metadata("design:type", String)
], CreateRecipeDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Для тех кто любит поострей',
        description: 'Описание пиццы',
    }),
    __metadata("design:type", String)
], CreateRecipeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: '10',
        description: 'Процент скидки на пиццу пиццы',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateRecipeDto.prototype, "salePercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        name: '[26,30]',
        description: 'Какие размеры будут в данном рецепте у пиццы',
    }),
    __metadata("design:type", Array)
], CreateRecipeDto.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        name: '[тонкое, сырные бортики]',
        description: 'Какие типы теста будут в данном рецепте у пиццы',
    }),
    __metadata("design:type", Array)
], CreateRecipeDto.prototype, "doughTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        name: '[капуста, картошка, сыр]',
        description: 'Какие ингредиенты будут в данном рецепте у пиццы',
    }),
    __metadata("design:type", Array)
], CreateRecipeDto.prototype, "ingredients", void 0);
exports.CreateRecipeDto = CreateRecipeDto;
//# sourceMappingURL=create-recipe.dto.js.map
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
exports.CreatePizzaVariationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatePizzaVariationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '640',
        description: 'Стоимость собранной пиццы идентификатор',
    }),
    __metadata("design:type", Number)
], CreatePizzaVariationDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1, 2, 3],
        description: 'Массив id дополнительных ингредиентов',
        required: false,
    }),
    __metadata("design:type", Array)
], CreatePizzaVariationDto.prototype, "additionalIngredientsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Id размера пиццы',
    }),
    __metadata("design:type", Number)
], CreatePizzaVariationDto.prototype, "sizeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Id типа пиццы',
    }),
    __metadata("design:type", Number)
], CreatePizzaVariationDto.prototype, "doughTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Id рецепта пиццы',
    }),
    __metadata("design:type", Number)
], CreatePizzaVariationDto.prototype, "recipeId", void 0);
exports.CreatePizzaVariationDto = CreatePizzaVariationDto;
//# sourceMappingURL=create-pizza-variation.dto.js.map
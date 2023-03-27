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
exports.AdditionalIngredient = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let AdditionalIngredient = class AdditionalIngredient {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdditionalIngredient.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Савойская капуста',
        description: 'Название дополнительного ингредиента',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdditionalIngredient.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'url',
        description: 'Ссылка на картинку для дополнительного ингредиента',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdditionalIngredient.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '60',
        description: 'Цена дополнительного ингредиента',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AdditionalIngredient.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15',
        description: 'Вес дополнительного ингредиента',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AdditionalIngredient.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: 'Сколько максимум можно положить дополнительного ингредиента',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AdditionalIngredient.prototype, "maxCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: 'Есть ли в наличии дополнительного ингредиента',
        required: false,
    }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], AdditionalIngredient.prototype, "inStock", void 0);
AdditionalIngredient = __decorate([
    (0, typeorm_1.Entity)()
], AdditionalIngredient);
exports.AdditionalIngredient = AdditionalIngredient;
//# sourceMappingURL=additional-ingredient.entity.js.map
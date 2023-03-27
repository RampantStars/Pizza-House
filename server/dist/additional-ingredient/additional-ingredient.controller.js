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
exports.AdditionalIngredientController = void 0;
const additional_ingredient_entity_1 = require("./entities/additional-ingredient.entity");
const dist_1 = require("@nestjs/swagger/dist");
const file_uploading_utils_1 = require("../utils/file-uploading.utils");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const decorators_1 = require("@nestjs/common/decorators");
const common_1 = require("@nestjs/common");
const additional_ingredient_service_1 = require("./additional-ingredient.service");
const create_additional_ingredient_dto_1 = require("./dto/create-additional-ingredient.dto");
const update_additional_ingredient_dto_1 = require("./dto/update-additional-ingredient.dto");
let AdditionalIngredientController = class AdditionalIngredientController {
    constructor(additionalIngredientService) {
        this.additionalIngredientService = additionalIngredientService;
    }
    create(createAdditionalIngredientDto, image) {
        if (image) {
            createAdditionalIngredientDto.imageUrl = image.filename;
        }
        return this.additionalIngredientService.createAdditionalIngredient(createAdditionalIngredientDto);
    }
    findAll() {
        return this.additionalIngredientService.findAllAdditionalIngredient();
    }
    findOne(id) {
        return this.additionalIngredientService.findOneAdditionalIngredient(+id);
    }
    update(id, updateAdditionalIngredientDto, image) {
        if (image) {
            updateAdditionalIngredientDto.imageUrl = image.filename;
        }
        return this.additionalIngredientService.updateAdditionalIngredient(+id, updateAdditionalIngredientDto);
    }
    remove(id) {
        return this.additionalIngredientService.removeAdditionalIngredient(+id);
    }
};
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Добавление дополнительного ингредиента' }),
    (0, dist_1.ApiResponse)({ status: 200, type: additional_ingredient_entity_1.AdditionalIngredient }),
    (0, common_1.Post)(),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: file_uploading_utils_1.editFileName,
        }),
        fileFilter: file_uploading_utils_1.imageFileFilter,
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_additional_ingredient_dto_1.CreateAdditionalIngredientDto, Object]),
    __metadata("design:returntype", void 0)
], AdditionalIngredientController.prototype, "create", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение всех дополнительных ингредиентов' }),
    (0, dist_1.ApiResponse)({ status: 200, type: [additional_ingredient_entity_1.AdditionalIngredient] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdditionalIngredientController.prototype, "findAll", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение дополнительного ингредиента' }),
    (0, dist_1.ApiResponse)({ status: 200, type: additional_ingredient_entity_1.AdditionalIngredient }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdditionalIngredientController.prototype, "findOne", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Изменение дополнительного ингредиента' }),
    (0, dist_1.ApiResponse)({ status: 200, type: additional_ingredient_entity_1.AdditionalIngredient }),
    (0, common_1.Patch)(':id'),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: file_uploading_utils_1.editFileName,
        }),
        fileFilter: file_uploading_utils_1.imageFileFilter,
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_additional_ingredient_dto_1.UpdateAdditionalIngredientDto, Object]),
    __metadata("design:returntype", void 0)
], AdditionalIngredientController.prototype, "update", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Удаление дополнительного ингредиента' }),
    (0, dist_1.ApiResponse)({ status: 200, type: additional_ingredient_entity_1.AdditionalIngredient }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdditionalIngredientController.prototype, "remove", null);
AdditionalIngredientController = __decorate([
    (0, dist_1.ApiTags)('Дополнительный ингредиент'),
    (0, common_1.Controller)('additionalIngredient'),
    __metadata("design:paramtypes", [additional_ingredient_service_1.AdditionalIngredientService])
], AdditionalIngredientController);
exports.AdditionalIngredientController = AdditionalIngredientController;
//# sourceMappingURL=additional-ingredient.controller.js.map
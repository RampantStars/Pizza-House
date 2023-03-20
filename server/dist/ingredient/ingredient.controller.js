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
exports.IngredientController = void 0;
const common_1 = require("@nestjs/common");
const ingredient_service_1 = require("./ingredient.service");
const create_ingredient_dto_1 = require("./dto/create-ingredient.dto");
const update_ingredient_dto_1 = require("./dto/update-ingredient.dto");
const decorators_1 = require("@nestjs/common/decorators");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_uploading_utils_1 = require("../utils/file-uploading.utils");
let IngredientController = class IngredientController {
    constructor(ingredientService) {
        this.ingredientService = ingredientService;
    }
    create(createIngredientDto, file) {
        return this.ingredientService.createIngredient(createIngredientDto, file);
    }
    findAll() {
        return this.ingredientService.findAllIngredients();
    }
    findOne(id) {
        return this.ingredientService.findOneIngredient(+id);
    }
    update(id, updateIngredientDto, image) {
        return this.ingredientService.updateIngredient(+id, updateIngredientDto, image);
    }
    remove(id) {
        return this.ingredientService.removeIngredient(+id);
    }
};
__decorate([
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
    __metadata("design:paramtypes", [create_ingredient_dto_1.CreateIngredientDto, Object]),
    __metadata("design:returntype", void 0)
], IngredientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngredientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngredientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/ingredient',
            filename: file_uploading_utils_1.editFileName,
        }),
        fileFilter: file_uploading_utils_1.imageFileFilter,
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ingredient_dto_1.UpdateIngredientDto, Object]),
    __metadata("design:returntype", void 0)
], IngredientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngredientController.prototype, "remove", null);
IngredientController = __decorate([
    (0, common_1.Controller)('ingredient'),
    __metadata("design:paramtypes", [ingredient_service_1.IngredientService])
], IngredientController);
exports.IngredientController = IngredientController;
//# sourceMappingURL=ingredient.controller.js.map
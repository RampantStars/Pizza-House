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
exports.RecipeController = void 0;
const file_uploading_utils_1 = require("./../utils/file-uploading.utils");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const decorators_1 = require("@nestjs/common/decorators");
const recipe_entity_1 = require("./entities/recipe.entity");
const dist_1 = require("@nestjs/swagger/dist");
const common_1 = require("@nestjs/common");
const recipe_service_1 = require("./recipe.service");
const create_recipe_dto_1 = require("./dto/create-recipe.dto");
const update_recipe_dto_1 = require("./dto/update-recipe.dto");
let RecipeController = class RecipeController {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    create(createRecipeDto, file) {
        if (file) {
            createRecipeDto.imageUrl = file.filename;
        }
        return this.recipeService.createRecipe(createRecipeDto);
    }
    findAll() {
        return this.recipeService.findAllRecipe();
    }
    findOne(id) {
        return this.recipeService.findOneRecipe(+id);
    }
    update(id, updateRecipeDto, file) {
        if (file) {
            updateRecipeDto.imageUrl = file.filename;
        }
        return this.recipeService.updateRecipe(+id, updateRecipeDto);
    }
    remove(id) {
        return this.recipeService.removeRecipe(+id);
    }
};
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Создание пиццы' }),
    (0, dist_1.ApiResponse)({ status: 200, type: recipe_entity_1.Recipe }),
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
    __metadata("design:paramtypes", [create_recipe_dto_1.CreateRecipeDto, Object]),
    __metadata("design:returntype", void 0)
], RecipeController.prototype, "create", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение всех рецептов пицц' }),
    (0, dist_1.ApiResponse)({ status: 200, type: recipe_entity_1.Recipe }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecipeController.prototype, "findAll", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение рецепта пиццы' }),
    (0, dist_1.ApiResponse)({ status: 200, type: recipe_entity_1.Recipe }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecipeController.prototype, "findOne", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Обновление рецепта пиццы' }),
    (0, dist_1.ApiResponse)({ status: 200, type: recipe_entity_1.Recipe }),
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
    __metadata("design:paramtypes", [String, update_recipe_dto_1.UpdateRecipeDto, Object]),
    __metadata("design:returntype", void 0)
], RecipeController.prototype, "update", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Удаление рецепта пиццы' }),
    (0, dist_1.ApiResponse)({ status: 200, type: recipe_entity_1.Recipe }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecipeController.prototype, "remove", null);
RecipeController = __decorate([
    (0, dist_1.ApiTags)('Рецепт пиццы'),
    (0, common_1.Controller)('recipe'),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeController);
exports.RecipeController = RecipeController;
//# sourceMappingURL=recipe.controller.js.map
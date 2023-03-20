"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientModule = void 0;
const type_ingredient_module_1 = require("./../type-ingredient/type-ingredient.module");
const type_ingredient_entity_1 = require("./../type-ingredient/entities/type-ingredient.entity");
const ingredient_entity_1 = require("./entities/ingredient.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const ingredient_service_1 = require("./ingredient.service");
const ingredient_controller_1 = require("./ingredient.controller");
let IngredientModule = class IngredientModule {
};
IngredientModule = __decorate([
    (0, common_1.Module)({
        controllers: [ingredient_controller_1.IngredientController],
        providers: [ingredient_service_1.IngredientService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ingredient_entity_1.Ingredient, type_ingredient_entity_1.TypeIngredient]),
            type_ingredient_module_1.TypeIngredientModule,
        ],
        exports: [ingredient_service_1.IngredientService],
    })
], IngredientModule);
exports.IngredientModule = IngredientModule;
//# sourceMappingURL=ingredient.module.js.map
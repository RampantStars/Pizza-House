"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeIngredientModule = void 0;
const ingredient_entity_1 = require("./../ingredient/entities/ingredient.entity");
const type_ingredient_entity_1 = require("./entities/type-ingredient.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const type_ingredient_service_1 = require("./type-ingredient.service");
const type_ingredient_controller_1 = require("./type-ingredient.controller");
let TypeIngredientModule = class TypeIngredientModule {
};
TypeIngredientModule = __decorate([
    (0, common_1.Module)({
        providers: [type_ingredient_service_1.TypeIngredientService],
        controllers: [type_ingredient_controller_1.TypeIngredientController],
        imports: [typeorm_1.TypeOrmModule.forFeature([type_ingredient_entity_1.TypeIngredient, ingredient_entity_1.Ingredient])],
        exports: [type_ingredient_service_1.TypeIngredientService],
    })
], TypeIngredientModule);
exports.TypeIngredientModule = TypeIngredientModule;
//# sourceMappingURL=type-ingredient.module.js.map
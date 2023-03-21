"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const recipe_entity_1 = require("./entities/recipe.entity");
const dough_type_entity_1 = require("./../dough-type/entities/dough-type.entity");
const ingredient_entity_1 = require("./../ingredient/entities/ingredient.entity");
const size_entity_1 = require("./../size/entities/size.entity");
const common_1 = require("@nestjs/common");
const recipe_service_1 = require("./recipe.service");
const recipe_controller_1 = require("./recipe.controller");
let RecipeModule = class RecipeModule {
};
RecipeModule = __decorate([
    (0, common_1.Module)({
        controllers: [recipe_controller_1.RecipeController],
        providers: [recipe_service_1.RecipeService],
        imports: [typeorm_1.TypeOrmModule.forFeature([recipe_entity_1.Recipe, size_entity_1.Size, ingredient_entity_1.Ingredient, dough_type_entity_1.DoughType])],
        exports: [recipe_service_1.RecipeService],
    })
], RecipeModule);
exports.RecipeModule = RecipeModule;
//# sourceMappingURL=recipe.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaVariationModule = void 0;
const recipe_module_1 = require("./../recipe/recipe.module");
const dough_type_module_1 = require("./../dough-type/dough-type.module");
const size_module_1 = require("./../size/size.module");
const additional_ingredient_module_1 = require("./../additional-ingredient/additional-ingredient.module");
const dough_type_entity_1 = require("./../dough-type/entities/dough-type.entity");
const size_entity_1 = require("./../size/entities/size.entity");
const additional_ingredient_entity_1 = require("./../additional-ingredient/entities/additional-ingredient.entity");
const pizza_variation_entity_1 = require("./entities/pizza-variation.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const pizza_variation_service_1 = require("./pizza-variation.service");
const pizza_variation_controller_1 = require("./pizza-variation.controller");
let PizzaVariationModule = class PizzaVariationModule {
};
PizzaVariationModule = __decorate([
    (0, common_1.Module)({
        controllers: [pizza_variation_controller_1.PizzaVariationController],
        providers: [pizza_variation_service_1.PizzaVariationService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                pizza_variation_entity_1.PizzaVariation,
                additional_ingredient_entity_1.AdditionalIngredient,
                size_entity_1.Size,
                dough_type_entity_1.DoughType,
            ]),
            additional_ingredient_module_1.AdditionalIngredientModule,
            size_module_1.SizeModule,
            dough_type_module_1.DoughTypeModule,
            recipe_module_1.RecipeModule,
        ],
        exports: [pizza_variation_service_1.PizzaVariationService],
    })
], PizzaVariationModule);
exports.PizzaVariationModule = PizzaVariationModule;
//# sourceMappingURL=pizza-variation.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const pizza_variation_entity_1 = require("./pizza-variation/entities/pizza-variation.entity");
const additional_ingredient_entity_1 = require("./additional-ingredient/entities/additional-ingredient.entity");
const user_entity_1 = require("./user/entities/user.entity");
const order_status_entity_1 = require("./order-status/entities/order-status.entity");
const recipe_entity_1 = require("./recipe/entities/recipe.entity");
const platform_express_1 = require("@nestjs/platform-express");
const ingredient_entity_1 = require("./ingredient/entities/ingredient.entity");
const type_ingredient_entity_1 = require("./type-ingredient/entities/type-ingredient.entity");
const dough_type_entity_1 = require("./dough-type/entities/dough-type.entity");
const size_entity_1 = require("./size/entities/size.entity");
const role_module_1 = require("./role/role.module");
const role_entity_1 = require("./role/entities/role.entity");
const modules_1 = require("@nestjs/common/decorators/modules");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const size_module_1 = require("./size/size.module");
const dough_type_module_1 = require("./dough-type/dough-type.module");
const type_ingredient_module_1 = require("./type-ingredient/type-ingredient.module");
const recipe_module_1 = require("./recipe/recipe.module");
const ingredient_module_1 = require("./ingredient/ingredient.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const order_status_module_1 = require("./order-status/order-status.module");
const user_module_1 = require("./user/user.module");
const additional_ingredient_module_1 = require("./additional-ingredient/additional-ingredient.module");
const pizza_variation_module_1 = require("./pizza-variation/pizza-variation.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, modules_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
            }),
            platform_express_1.MulterModule.register({ dest: './uploads' }),
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                entities: [
                    role_entity_1.Role,
                    size_entity_1.Size,
                    dough_type_entity_1.DoughType,
                    type_ingredient_entity_1.TypeIngredient,
                    ingredient_entity_1.Ingredient,
                    recipe_entity_1.Recipe,
                    order_status_entity_1.OrderStatus,
                    user_entity_1.User,
                    additional_ingredient_entity_1.AdditionalIngredient,
                    pizza_variation_entity_1.PizzaVariation,
                ],
                synchronize: true,
            }),
            role_module_1.RoleModule,
            size_module_1.SizeModule,
            dough_type_module_1.DoughTypeModule,
            type_ingredient_module_1.TypeIngredientModule,
            recipe_module_1.RecipeModule,
            ingredient_module_1.IngredientModule,
            order_status_module_1.OrderStatusModule,
            user_module_1.UserModule,
            additional_ingredient_module_1.AdditionalIngredientModule,
            pizza_variation_module_1.PizzaVariationModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
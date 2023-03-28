"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoughTypeModule = void 0;
const pizza_variation_entity_1 = require("./../pizza-variation/entities/pizza-variation.entity");
const dough_type_entity_1 = require("./entities/dough-type.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const dough_type_service_1 = require("./dough-type.service");
const dough_type_controller_1 = require("./dough-type.controller");
let DoughTypeModule = class DoughTypeModule {
};
DoughTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dough_type_entity_1.DoughType, pizza_variation_entity_1.PizzaVariation])],
        controllers: [dough_type_controller_1.DoughTypeController],
        providers: [dough_type_service_1.DoughTypeService],
        exports: [dough_type_service_1.DoughTypeService],
    })
], DoughTypeModule);
exports.DoughTypeModule = DoughTypeModule;
//# sourceMappingURL=dough-type.module.js.map
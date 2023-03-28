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
exports.PizzaVariationController = void 0;
const dist_1 = require("@nestjs/swagger/dist");
const common_1 = require("@nestjs/common");
const pizza_variation_service_1 = require("./pizza-variation.service");
const create_pizza_variation_dto_1 = require("./dto/create-pizza-variation.dto");
const update_pizza_variation_dto_1 = require("./dto/update-pizza-variation.dto");
let PizzaVariationController = class PizzaVariationController {
    constructor(pizzaVariationService) {
        this.pizzaVariationService = pizzaVariationService;
    }
    create(createPizzaVariationDto) {
        return this.pizzaVariationService.createPizzaVariation(createPizzaVariationDto);
    }
    findAll() {
        return this.pizzaVariationService.findAllPizzaVariation();
    }
    findOne(id) {
        return this.pizzaVariationService.findOnePizzaVariation(+id);
    }
    update(id, updatePizzaVariationDto) {
        return this.pizzaVariationService.updatePizzaVariation(+id, updatePizzaVariationDto);
    }
    remove(id) {
        return this.pizzaVariationService.removePizzaVariation(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pizza_variation_dto_1.CreatePizzaVariationDto]),
    __metadata("design:returntype", void 0)
], PizzaVariationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PizzaVariationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PizzaVariationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pizza_variation_dto_1.UpdatePizzaVariationDto]),
    __metadata("design:returntype", void 0)
], PizzaVariationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PizzaVariationController.prototype, "remove", null);
PizzaVariationController = __decorate([
    (0, dist_1.ApiTags)('Вариация заказанной пиццы'),
    (0, common_1.Controller)('pizzaVariation'),
    __metadata("design:paramtypes", [pizza_variation_service_1.PizzaVariationService])
], PizzaVariationController);
exports.PizzaVariationController = PizzaVariationController;
//# sourceMappingURL=pizza-variation.controller.js.map
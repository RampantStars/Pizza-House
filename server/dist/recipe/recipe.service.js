"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
let RecipeService = class RecipeService {
    create(createRecipeDto) {
        return 'This action adds a new recipe';
    }
    findAll() {
        return `This action returns all recipe`;
    }
    findOne(id) {
        return `This action returns a #${id} recipe`;
    }
    update(id, updateRecipeDto) {
        return `This action updates a #${id} recipe`;
    }
    remove(id) {
        return `This action removes a #${id} recipe`;
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)()
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map
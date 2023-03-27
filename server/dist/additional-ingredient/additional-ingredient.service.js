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
exports.AdditionalIngredientService = void 0;
const fs_1 = require("fs");
const additional_ingredient_entity_1 = require("./entities/additional-ingredient.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AdditionalIngredientService = class AdditionalIngredientService {
    constructor(additionalIngredientRepository) {
        this.additionalIngredientRepository = additionalIngredientRepository;
    }
    async createAdditionalIngredient(createAdditionalIngredientDto) {
        const additionalIngredient = await this.additionalIngredientRepository.create(createAdditionalIngredientDto);
        return this.additionalIngredientRepository.save(additionalIngredient);
    }
    async findAllAdditionalIngredient() {
        const additionalIngredients = await this.additionalIngredientRepository.find();
        return additionalIngredients;
    }
    async findOneAdditionalIngredient(id) {
        const additionalIngredient = await this.additionalIngredientRepository.findOne({ where: { id: id } });
        if (!additionalIngredient) {
            throw new common_1.NotFoundException(`AdditionalIngredient with ID=${id} not found`);
        }
        return additionalIngredient;
    }
    async updateAdditionalIngredient(id, updateAdditionalIngredientDto) {
        const additionalIngredient = await this.additionalIngredientRepository.preload(Object.assign({ id: id }, updateAdditionalIngredientDto));
        if (!additionalIngredient) {
            throw new common_1.NotFoundException(`AdditionalIngredient with ID=${id} not found`);
        }
        if (updateAdditionalIngredientDto) {
            (0, fs_1.unlink)(`./uploads/${additionalIngredient.imageUrl}`, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('file deleted');
            });
        }
        return this.additionalIngredientRepository.save(additionalIngredient);
    }
    async removeAdditionalIngredient(id) {
        const additionalIngredient = await this.additionalIngredientRepository.findOne({ where: { id: id } });
        if (!additionalIngredient) {
            throw new common_1.NotFoundException(`AdditionalIngredient with ID=${id} not found`);
        }
        (0, fs_1.unlink)(`./uploads/${additionalIngredient.imageUrl}`, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('file deleted');
        });
        return this.additionalIngredientRepository.remove(additionalIngredient);
    }
};
AdditionalIngredientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(additional_ingredient_entity_1.AdditionalIngredient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdditionalIngredientService);
exports.AdditionalIngredientService = AdditionalIngredientService;
//# sourceMappingURL=additional-ingredient.service.js.map
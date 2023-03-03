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
exports.DoughTypeService = void 0;
const dough_type_entity_1 = require("./entities/dough-type.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DoughTypeService = class DoughTypeService {
    constructor(doughTypeRepository) {
        this.doughTypeRepository = doughTypeRepository;
    }
    async createDoughType(createDoughTypeDto) {
        const doughType = await this.doughTypeRepository.create(createDoughTypeDto);
        return this.doughTypeRepository.save(doughType);
    }
    async findAllDoughType() {
        const doughType = await this.doughTypeRepository.find();
        return doughType;
    }
    async findOneDoughType(id) {
        const doughType = await this.doughTypeRepository.findOneBy({ id });
        if (!doughType) {
            throw new common_1.NotFoundException(`DoughType with ID=${id} not found`);
        }
        return doughType;
    }
    async updateDoughType(id, updateDoughTypeDto) {
        const doughType = await this.doughTypeRepository.preload(Object.assign({ id: id }, updateDoughTypeDto));
        if (!doughType) {
            throw new common_1.NotFoundException(`DoughType with ID=${id} not found`);
        }
        return this.doughTypeRepository.save(doughType);
    }
    async removeDoughType(id) {
        const doughType = await this.doughTypeRepository.findOneBy({ id });
        if (!doughType) {
            throw new common_1.NotFoundException(`DoughType with ID=${id} not found`);
        }
        return this.doughTypeRepository.remove(doughType);
    }
};
DoughTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dough_type_entity_1.DoughType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DoughTypeService);
exports.DoughTypeService = DoughTypeService;
//# sourceMappingURL=dough-type.service.js.map
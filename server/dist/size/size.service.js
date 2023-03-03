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
exports.SizeService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const size_entity_1 = require("./entities/size.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let SizeService = class SizeService {
    constructor(sizeRepository) {
        this.sizeRepository = sizeRepository;
    }
    async createSize(createSizeDto) {
        const size = await this.sizeRepository.create(createSizeDto);
        return this.sizeRepository.save(size);
    }
    async findAllSize() {
        const sizes = await this.sizeRepository.find();
        return sizes;
    }
    async findOneSize(id) {
        const size = await this.sizeRepository.findOneBy({ id });
        if (!size) {
            throw new common_1.NotFoundException(`Size with ID=${id} not found`);
        }
        return size;
    }
    async updateSize(id, updateSizeDto) {
        const size = await this.sizeRepository.preload(Object.assign({ id: id }, updateSizeDto));
        if (!size) {
            throw new common_1.NotFoundException(`Size with ID=${id} not found`);
        }
        return this.sizeRepository.save(size);
    }
    async removeSize(id) {
        const size = await this.sizeRepository.findOneBy({ id });
        if (!size) {
            throw new common_1.NotFoundException(`Size with ID=${id} not found`);
        }
        return this.sizeRepository.remove(size);
    }
};
SizeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(size_entity_1.Size)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SizeService);
exports.SizeService = SizeService;
//# sourceMappingURL=size.service.js.map
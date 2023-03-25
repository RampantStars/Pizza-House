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
exports.OrderStatusService = void 0;
const order_status_entity_1 = require("./entities/order-status.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let OrderStatusService = class OrderStatusService {
    constructor(orderStatusRepository) {
        this.orderStatusRepository = orderStatusRepository;
    }
    async create(createOrderStatusDto) {
        const orderStatus = await this.orderStatusRepository.create(createOrderStatusDto);
        return this.orderStatusRepository.save(orderStatus);
    }
    async findAll() {
        const orderStatuses = await this.orderStatusRepository.find();
        return orderStatuses;
    }
    async findOne(id) {
        const orderStatus = await this.orderStatusRepository.findOne({
            where: { id: id },
        });
        if (!orderStatus) {
            throw new common_1.NotFoundException(`OrderStatus with ID=${id} not found`);
        }
        return orderStatus;
    }
    async update(id, updateOrderStatusDto) {
        const orderStatus = await this.orderStatusRepository.preload(Object.assign({ id: id }, updateOrderStatusDto));
        if (!orderStatus) {
            throw new common_1.NotFoundException(`OrderStatus with ID=${id} not found`);
        }
        return this.orderStatusRepository.save(orderStatus);
    }
    async remove(id) {
        const orderStatus = await this.orderStatusRepository.findOneBy({ id });
        if (!orderStatus) {
            throw new common_1.NotFoundException(`OrderStatus with ID=${id} not found`);
        }
        return this.orderStatusRepository.remove(orderStatus);
    }
};
OrderStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_status_entity_1.OrderStatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderStatusService);
exports.OrderStatusService = OrderStatusService;
//# sourceMappingURL=order-status.service.js.map
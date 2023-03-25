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
exports.OrderStatusController = void 0;
const order_status_entity_1 = require("./entities/order-status.entity");
const dist_1 = require("@nestjs/swagger/dist");
const common_1 = require("@nestjs/common");
const order_status_service_1 = require("./order-status.service");
const create_order_status_dto_1 = require("./dto/create-order-status.dto");
const update_order_status_dto_1 = require("./dto/update-order-status.dto");
let OrderStatusController = class OrderStatusController {
    constructor(orderStatusService) {
        this.orderStatusService = orderStatusService;
    }
    createOrderStatus(createOrderStatusDto) {
        return this.orderStatusService.create(createOrderStatusDto);
    }
    findAllOrderStatus() {
        return this.orderStatusService.findAll();
    }
    findOneOrderStatus(id) {
        return this.orderStatusService.findOne(+id);
    }
    updateOrderStatus(id, updateOrderStatusDto) {
        return this.orderStatusService.update(+id, updateOrderStatusDto);
    }
    removeOrderStatus(id) {
        return this.orderStatusService.remove(+id);
    }
};
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Создание статуса' }),
    (0, dist_1.ApiResponse)({ status: 200, type: order_status_entity_1.OrderStatus }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_status_dto_1.CreateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "createOrderStatus", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение всех статусов' }),
    (0, dist_1.ApiResponse)({ status: 200, type: [order_status_entity_1.OrderStatus] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "findAllOrderStatus", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Получение статуса' }),
    (0, dist_1.ApiResponse)({ status: 200, type: order_status_entity_1.OrderStatus }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "findOneOrderStatus", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Изменение статуса' }),
    (0, dist_1.ApiResponse)({ status: 200, type: order_status_entity_1.OrderStatus }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_status_dto_1.UpdateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "updateOrderStatus", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Удаление статуса' }),
    (0, dist_1.ApiResponse)({ status: 200, type: order_status_entity_1.OrderStatus }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "removeOrderStatus", null);
OrderStatusController = __decorate([
    (0, dist_1.ApiTags)('Статус заказа'),
    (0, common_1.Controller)('orderStatus'),
    __metadata("design:paramtypes", [order_status_service_1.OrderStatusService])
], OrderStatusController);
exports.OrderStatusController = OrderStatusController;
//# sourceMappingURL=order-status.controller.js.map
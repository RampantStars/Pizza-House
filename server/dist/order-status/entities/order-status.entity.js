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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
let OrderStatus = class OrderStatus {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderStatus.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'В обработке', description: 'Значение статуса' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderStatus.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.orderStatus),
    __metadata("design:type", Array)
], OrderStatus.prototype, "order", void 0);
OrderStatus = __decorate([
    (0, typeorm_1.Entity)()
], OrderStatus);
exports.OrderStatus = OrderStatus;
//# sourceMappingURL=order-status.entity.js.map
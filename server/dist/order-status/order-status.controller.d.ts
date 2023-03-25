import { OrderStatus } from './entities/order-status.entity';
import { OrderStatusService } from './order-status.service';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
export declare class OrderStatusController {
    private readonly orderStatusService;
    constructor(orderStatusService: OrderStatusService);
    createOrderStatus(createOrderStatusDto: CreateOrderStatusDto): Promise<OrderStatus>;
    findAllOrderStatus(): Promise<OrderStatus[]>;
    findOneOrderStatus(id: string): Promise<OrderStatus>;
    updateOrderStatus(id: string, updateOrderStatusDto: UpdateOrderStatusDto): Promise<OrderStatus>;
    removeOrderStatus(id: string): Promise<OrderStatus>;
}

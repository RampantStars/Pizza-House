import { OrderStatus } from './entities/order-status.entity';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { Repository } from 'typeorm';
export declare class OrderStatusService {
    private readonly orderStatusRepository;
    constructor(orderStatusRepository: Repository<OrderStatus>);
    create(createOrderStatusDto: CreateOrderStatusDto): Promise<OrderStatus>;
    findAll(): Promise<OrderStatus[]>;
    findOne(id: number): Promise<OrderStatus>;
    update(id: number, updateOrderStatusDto: UpdateOrderStatusDto): Promise<OrderStatus>;
    remove(id: number): Promise<OrderStatus>;
}

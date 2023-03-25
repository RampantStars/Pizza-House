import { OrderStatus } from './entities/order-status.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { Repository } from 'typeorm';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectRepository(OrderStatus)
    private readonly orderStatusRepository: Repository<OrderStatus>,
  ) {}

  async create(
    createOrderStatusDto: CreateOrderStatusDto,
  ): Promise<OrderStatus> {
    const orderStatus = await this.orderStatusRepository.create(
      createOrderStatusDto,
    );
    return this.orderStatusRepository.save(orderStatus);
  }

  async findAll(): Promise<OrderStatus[]> {
    const orderStatuses = await this.orderStatusRepository.find();
    return orderStatuses;
  }

  async findOne(id: number): Promise<OrderStatus> {
    const orderStatus = await this.orderStatusRepository.findOne({
      where: { id: id },
    });
    if (!orderStatus) {
      throw new NotFoundException(`OrderStatus with ID=${id} not found`);
    }
    return orderStatus;
  }

  async update(
    id: number,
    updateOrderStatusDto: UpdateOrderStatusDto,
  ): Promise<OrderStatus> {
    const orderStatus = await this.orderStatusRepository.preload({
      id: id,
      ...updateOrderStatusDto,
    });
    if (!orderStatus) {
      throw new NotFoundException(`OrderStatus with ID=${id} not found`);
    }
    return this.orderStatusRepository.save(orderStatus);
  }

  async remove(id: number): Promise<OrderStatus> {
    const orderStatus = await this.orderStatusRepository.findOneBy({ id });
    if (!orderStatus) {
      throw new NotFoundException(`OrderStatus with ID=${id} not found`);
    }
    return this.orderStatusRepository.remove(orderStatus);
  }
}

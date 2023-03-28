import { OrderStatusService } from './../order-status/order-status.service';
import { UserService } from './../user/user.service';
import { OrderLineService } from './../order-line/order-line.service';
import { OrderLine } from './../order-line/entities/order-line.entity';
import { Order } from 'src/order/entities/order.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly orderLineService: OrderLineService,
    private readonly userService: UserService,
    private readonly orderStatusService: OrderStatusService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const orderStatus = await this.orderStatusService.findOne(
      createOrderDto.orderStatusId,
    );

    const user = await this.userService.findOneUser(createOrderDto.userId);

    const orderLines = (await Promise.all(
      createOrderDto.orderLinesId.map((orderLineId) =>
        this.orderLineService.findOneOrderLine(orderLineId),
      ),
    )) as OrderLine[];

    const order = await this.orderRepository.create({
      ...createOrderDto,
      orderStatus: orderStatus,
      user: user,
      orderLines: orderLines,
    });
    return this.orderRepository.save(order);
  }

  async findAllOrder(): Promise<Order[]> {
    const orders = await this.orderRepository.find({
      relations: [
        'user',
        'user.roles',
        'orderStatus',
        'orderLines',
        'orderLines.pizzaVariation',
        'orderLines.pizzaVariation.recipe',
        'orderLines.pizzaVariation.recipe.ingredients',
        'orderLines.pizzaVariation.additionalIngredients',
        'orderLines.pizzaVariation.size',
        'orderLines.pizzaVariation.doughType',
      ],
    });
    return orders;
  }

  async findOneOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id: id },
      relations: [
        'user',
        'user.roles',
        'orderStatus',
        'orderLines',
        'orderLines.pizzaVariation',
        'orderLines.pizzaVariation.recipe',
        'orderLines.pizzaVariation.recipe.ingredients',
        'orderLines.pizzaVariation.additionalIngredients',
        'orderLines.pizzaVariation.size',
        'orderLines.pizzaVariation.doughType',
      ],
    });
    if (!order) {
      throw new NotFoundException(`Order with ID=${id} not found`);
    }
    return order;
  }

  async updateOrder(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.orderRepository.preload({
      id: id,
      ...updateOrderDto,
    });

    if (!order) {
      throw new NotFoundException(`Order with ID=${id} not found`);
    }

    if (updateOrderDto.userId) {
      const user = await this.userService.findOneUser(updateOrderDto.userId);
      if (!order) {
        throw new NotFoundException(`Order with ID=${id} not found`);
      }
      order.user = user;
    }

    if (updateOrderDto.orderStatusId) {
      const orderStatus = await this.orderStatusService.findOne(
        updateOrderDto.orderStatusId,
      );
      if (!order) {
        throw new NotFoundException(`Order Status with ID=${id} not found`);
      }
      order.orderStatus = orderStatus;
    }

    if (updateOrderDto.orderLinesId) {
      const orderLines = (await Promise.all(
        updateOrderDto.orderLinesId.map((orderLineId) =>
          this.orderLineService.findOneOrderLine(orderLineId),
        ),
      )) as OrderLine[];

      if (!orderLines) {
        throw new NotFoundException(`Order Lines with not found`);
      }

      order.orderLines = [...orderLines];
    }

    return this.orderRepository.save(order);
  }

  async removeOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Order with ID=${id} not found`);
    }
    return this.orderRepository.remove(order);
  }
}

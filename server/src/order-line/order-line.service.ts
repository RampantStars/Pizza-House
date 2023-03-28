import { PizzaVariationService } from './../pizza-variation/pizza-variation.service';
import { OrderLine } from './entities/order-line.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderLineDto } from './dto/create-order-line.dto';
import { UpdateOrderLineDto } from './dto/update-order-line.dto';
import { Repository } from 'typeorm';

@Injectable()
export class OrderLineService {
  constructor(
    @InjectRepository(OrderLine)
    private readonly orderLineRepository: Repository<OrderLine>,
    private readonly pizzaVariationService: PizzaVariationService,
  ) {}
  async createOrderLine(
    createOrderLineDto: CreateOrderLineDto,
  ): Promise<OrderLine> {
    const pizzaVariation =
      await this.pizzaVariationService.findOnePizzaVariation(
        createOrderLineDto.pizzaVariationId,
      );

    const orderLine = this.orderLineRepository.create({
      ...createOrderLineDto,
      pizzaVariation: pizzaVariation,
    });

    return this.orderLineRepository.save(orderLine);
  }

  async findAllOrderLine(): Promise<OrderLine[]> {
    const orderLines = await this.orderLineRepository.find({
      relations: {
        pizzaVariation: {
          additionalIngredients: true,
          recipe: true,
          doughType: true,
          size: true,
        },
      },
    });
    return orderLines;
  }

  async findOneOrderLine(id: number): Promise<OrderLine> {
    const orderLine = await this.orderLineRepository.findOne({
      where: { id: id },
      relations: {
        pizzaVariation: {
          additionalIngredients: true,
          recipe: true,
          doughType: true,
          size: true,
        },
      },
    });
    if (!orderLine) {
      throw new NotFoundException(`OrderLine with ID=${id} not found`);
    }
    return orderLine;
  }

  async updateOrderLine(
    id: number,
    updateOrderLineDto: UpdateOrderLineDto,
  ): Promise<OrderLine> {
    const orderLine = await this.orderLineRepository.preload({
      id: id,
      ...updateOrderLineDto,
    });
    if (!orderLine) {
      throw new NotFoundException(`OrderLine with ID=${id} not found`);
    }
    return this.orderLineRepository.save(orderLine);
  }

  async removeOrderLine(id: number) {
    const orderLine = await this.orderLineRepository.findOneBy({ id });
    if (!orderLine) {
      throw new NotFoundException(`OrderLine with ID=${id} not found`);
    }
    return this.orderLineRepository.remove(orderLine);
  }
}

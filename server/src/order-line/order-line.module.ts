import { Order } from 'src/order/entities/order.entity';
import { PizzaVariationModule } from './../pizza-variation/pizza-variation.module';
import { PizzaVariation } from './../pizza-variation/entities/pizza-variation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderLine } from './entities/order-line.entity';
import { Module } from '@nestjs/common';
import { OrderLineService } from './order-line.service';
import { OrderLineController } from './order-line.controller';

@Module({
  controllers: [OrderLineController],
  providers: [OrderLineService],
  imports: [
    TypeOrmModule.forFeature([OrderLine, PizzaVariation, Order]),
    PizzaVariationModule,
  ],
  exports: [OrderLineService],
})
export class OrderLineModule {}

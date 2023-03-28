import { OrderLineModule } from './../order-line/order-line.module';
import { UserModule } from './../user/user.module';
import { OrderStatusModule } from './../order-status/order-status.module';
import { OrderLine } from './../order-line/entities/order-line.entity';
import { User } from './../user/entities/user.entity';
import { OrderStatus } from './../order-status/entities/order-status.entity';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    TypeOrmModule.forFeature([Order, OrderStatus, User, OrderLine]),
    OrderStatusModule,
    UserModule,
    OrderLineModule,
  ],
  exports: [OrderService],
})
export class OrderModule {}

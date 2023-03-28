import { Order } from 'src/order/entities/order.entity';
import { OrderStatus } from './entities/order-status.entity';
import { Module } from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import { OrderStatusController } from './order-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [OrderStatusController],
  providers: [OrderStatusService],
  imports: [TypeOrmModule.forFeature([OrderStatus, Order])],
  exports: [OrderStatusService],
})
export class OrderStatusModule {}

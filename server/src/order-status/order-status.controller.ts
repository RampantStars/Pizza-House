import { OrderStatus } from './entities/order-status.entity';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger/dist';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@ApiTags('Статус заказа')
@Controller('orderStatus')
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @ApiOperation({ summary: 'Создание статуса' })
  @ApiResponse({ status: 200, type: OrderStatus })
  @Post()
  createOrderStatus(@Body() createOrderStatusDto: CreateOrderStatusDto) {
    return this.orderStatusService.create(createOrderStatusDto);
  }

  @ApiOperation({ summary: 'Получение всех статусов' })
  @ApiResponse({ status: 200, type: [OrderStatus] })
  @Get()
  findAllOrderStatus() {
    return this.orderStatusService.findAll();
  }

  @ApiOperation({ summary: 'Получение статуса' })
  @ApiResponse({ status: 200, type: OrderStatus })
  @Get(':id')
  findOneOrderStatus(@Param('id') id: string) {
    return this.orderStatusService.findOne(+id);
  }

  @ApiOperation({ summary: 'Изменение статуса' })
  @ApiResponse({ status: 200, type: OrderStatus })
  @Patch(':id')
  updateOrderStatus(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.orderStatusService.update(+id, updateOrderStatusDto);
  }

  @ApiOperation({ summary: 'Удаление статуса' })
  @ApiResponse({ status: 200, type: OrderStatus })
  @Delete(':id')
  removeOrderStatus(@Param('id') id: string) {
    return this.orderStatusService.remove(+id);
  }
}

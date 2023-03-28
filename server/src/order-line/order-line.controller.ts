import { ApiTags } from '@nestjs/swagger/dist';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderLineService } from './order-line.service';
import { CreateOrderLineDto } from './dto/create-order-line.dto';
import { UpdateOrderLineDto } from './dto/update-order-line.dto';

@ApiTags('Строка заказа')
@Controller('orderLine')
export class OrderLineController {
  constructor(private readonly orderLineService: OrderLineService) {}

  @Post()
  create(@Body() createOrderLineDto: CreateOrderLineDto) {
    return this.orderLineService.createOrderLine(createOrderLineDto);
  }

  @Get()
  findAll() {
    return this.orderLineService.findAllOrderLine();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderLineService.findOneOrderLine(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderLineDto: UpdateOrderLineDto,
  ) {
    return this.orderLineService.updateOrderLine(+id, updateOrderLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderLineService.removeOrderLine(+id);
  }
}

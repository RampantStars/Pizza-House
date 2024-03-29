import { ApiProperty } from '@nestjs/swagger';
import { OrderLine } from 'src/order-line/entities/order-line.entity';
export class CreateOrderDto {
  @ApiProperty({
    example: 'Иваново, ул. Парижской Коммуны д.56А',
    description: 'Адрес заказа',
  })
  readonly address: string;

  @ApiProperty({
    example: 5,
    description: 'Количество товаров в заказе',
  })
  readonly quantityItem: number;

  @ApiProperty({
    example: 'Без горчицы',
    description: 'Комментарий к заказу заказа',
    nullable: true,
    required: false,
  })
  readonly comment: string;

  @ApiProperty({
    example: 1,
    description: 'Id пользователя сделавшего заказ',
    nullable: true,
  })
  readonly userId: number;

  @ApiProperty({
    example: 1,
    description: 'ID статуса заказа',
    nullable: true,
  })
  readonly orderStatusId: number;

  @ApiProperty({
    example: [1, 2, 3],
    description: 'Id Строчек заказа',
    nullable: true,
  })
  readonly orderLines: OrderLine[];
}

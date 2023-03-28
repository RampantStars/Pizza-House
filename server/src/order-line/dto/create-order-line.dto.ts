import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderLineDto {
  @ApiProperty({ example: '700', description: 'Цена строки заказа' })
  readonly price: number;

  @ApiProperty({
    example: '3',
    description: 'Количество товаров в строке заказа',
  })
  readonly quantity: number;

  @ApiProperty({
    example: 1,
    description: 'Id заказанного товара',
  })
  readonly pizzaVariationId: number;
}

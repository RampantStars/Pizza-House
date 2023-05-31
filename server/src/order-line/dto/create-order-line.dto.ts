import { ApiProperty } from '@nestjs/swagger';
import { PizzaVariation } from 'src/pizza-variation/entities/pizza-variation.entity';
export class CreateOrderLineDto {
  @ApiProperty({
    example: '3',
    description: 'Количество товаров в строке заказа',
  })
  readonly quantity: number;

  @ApiProperty({
    example: 1,
    description: 'Id заказанного товара',
  })
  readonly pizzaVariation: PizzaVariation;
}

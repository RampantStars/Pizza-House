import { ApiProperty } from '@nestjs/swagger';
export class CreateAdditionalIngredientDto {
  @ApiProperty({
    example: 'Савойская капуста',
    description: 'Название дополнительного ингредиента',
  })
  name: string;

  @ApiProperty({
    example: 'url',
    description: 'Ссылка на картинку для дополнительного ингредиента',
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    example: '60',
    description: 'Цена дополнительного ингредиента',
  })
  price: number;

  @ApiProperty({
    example: '15',
    description: 'Вес дополнительного ингредиента',
  })
  weight: number;

  @ApiProperty({
    example: '3',
    description: 'Сколько максимум можно положить дополнительного ингредиента',
  })
  maxCount: number;

  @ApiProperty({
    example: 'true',
    description: 'Есть ли в наличии дополнительного ингредиента',
    default: true,
    required: false,
  })
  inStock?: boolean;
}

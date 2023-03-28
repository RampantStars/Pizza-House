import { ApiProperty } from '@nestjs/swagger';
export class CreatePizzaVariationDto {
  @ApiProperty({
    example: '640',
    description: 'Стоимость собранной пиццы идентификатор',
  })
  price: number;

  @ApiProperty({
    example: [1, 2, 3],
    description: 'Массив id дополнительных ингредиентов',
    required: false,
  })
  additionalIngredientsId: number[];

  @ApiProperty({
    example: 1,
    description: 'Id размера пиццы',
  })
  sizeId: number;

  @ApiProperty({
    example: 1,
    description: 'Id типа пиццы',
  })
  doughTypeId: number;

  @ApiProperty({
    example: 1,
    description: 'Id рецепта пиццы',
  })
  recipeId: number;
}

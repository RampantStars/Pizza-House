import { ApiProperty } from '@nestjs/swagger';
export class CreateRecipeDto {
  @ApiProperty({
    example: 'Пицца 4 перца',
    description: 'Название рецепта пиццы',
  })
  readonly name: string;

  @ApiProperty({ example: '350', description: 'Стоимость рецепта пиццы' })
  readonly price: number;

  @ApiProperty({
    example: 'url',
    description: 'Изображение пиццы',
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    example: 'Для тех кто любит поострей',
    description: 'Описание пиццы',
  })
  readonly description: string;

  @ApiProperty({
    example: '10',
    description: 'Процент скидки на пиццу пиццы',
    required: false,
  })
  readonly salePercent?: number;

  @ApiProperty({
    type: [String],
    example: ['26', '30'],
    description: 'Какие размеры будут в данном рецепте у пиццы',
  })
  readonly sizes: string[];

  @ApiProperty({
    type: [String],
    example: ['тонкое', 'сырные бортики'],
    description: 'Какие типы теста будут в данном рецепте у пиццы',
  })
  readonly doughTypes: string[];

  @ApiProperty({
    type: [String],
    example: ['капуста', 'картошка', 'сыр'],
    description: 'Какие ингредиенты будут в данном рецепте у пиццы',
  })
  readonly ingredients: string[];
}

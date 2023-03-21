import { ApiProperty } from '@nestjs/swagger';
export class CreateRecipeDto {
  @ApiProperty({ name: 'Пицца 4 перца', description: 'Название рецепта пиццы' })
  readonly name: string;

  @ApiProperty({
    name: 'url',
    description: 'Изображение пиццы',
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    name: 'Для тех кто любит поострей',
    description: 'Описание пиццы',
  })
  readonly description: string;

  @ApiProperty({
    name: '10',
    description: 'Процент скидки на пиццу пиццы',
    required: false,
  })
  readonly salePercent?: number;

  @ApiProperty({
    type: [String],
    name: '[26,30]',
    description: 'Какие размеры будут в данном рецепте у пиццы',
  })
  readonly sizes: string[];

  @ApiProperty({
    type: [String],
    name: '[тонкое, сырные бортики]',
    description: 'Какие типы теста будут в данном рецепте у пиццы',
  })
  readonly doughTypes: string[];

  @ApiProperty({
    type: [String],
    name: '[капуста, картошка, сыр]',
    description: 'Какие ингредиенты будут в данном рецепте у пиццы',
  })
  readonly ingredients: string[];
}

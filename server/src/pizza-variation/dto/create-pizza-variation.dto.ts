import { ApiProperty } from '@nestjs/swagger';
import { AdditionalIngredient } from 'src/additional-ingredient/entities/additional-ingredient.entity';
import { DoughType } from 'src/dough-type/entities/dough-type.entity';
import { Recipe } from 'src/recipe/entities/recipe.entity';
import { Size } from 'src/size/entities/size.entity';
export class CreatePizzaVariationDto {
  // @ApiProperty({
  //   example: '640',
  //   description: 'Стоимость собранной пиццы идентификатор',
  // })
  // price: number;

  @ApiProperty({
    example: [AdditionalIngredient],
    description: 'Массив дополнительных ингредиентов',
    required: false,
  })
  additionalIngredients?: AdditionalIngredient[];

  @ApiProperty({
    example: Size,
    description: 'Размер пиццы',
  })
  size: Size;

  @ApiProperty({
    example: DoughType,
    description: 'Тип пиццы',
  })
  doughType: DoughType;

  @ApiProperty({
    example: 1,
    description: 'Id рецепта пиццы',
  })
  recipe: Recipe;
}

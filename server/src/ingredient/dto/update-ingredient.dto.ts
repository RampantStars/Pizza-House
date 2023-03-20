import { ApiProperty } from '@nestjs/swagger';
export class UpdateIngredientDto {
  @ApiProperty({ example: 'Капуста', description: 'Название ингредиента' })
  readonly name?: string;
  @ApiProperty({ example: '1', description: 'Id типа ингредиента' })
  readonly typeIngredientId?: number;
}

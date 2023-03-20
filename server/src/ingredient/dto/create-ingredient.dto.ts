import { ApiProperty } from '@nestjs/swagger';
export class CreateIngredientDto {
  @ApiProperty({ example: 'Капуста', description: 'Название ингредиента' })
  readonly name: string;
  @ApiProperty({ example: 'Файл', description: 'Ссылка на картинку роли' })
  imageUrl?: string;
  @ApiProperty({ example: '1', description: 'Id типа ингредиента' })
  readonly typeIngredientId: number;
}

import { ApiProperty } from '@nestjs/swagger';
export class CreateTypeIngredientDto {
  @ApiProperty({ example: 'Соус', description: 'Название категории' })
  readonly name: string;
}

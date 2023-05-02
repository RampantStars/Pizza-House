import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Мясная', description: 'Категория пиццы' })
  name: string;
}

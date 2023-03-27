import { ApiProperty } from '@nestjs/swagger';

export class CreateDoughTypeDto {
  @ApiProperty({ example: 'Традиционное', description: 'Тип теста пиццы' })
  readonly name: string;
  @ApiProperty({
    example: '236',
    description: 'Цена за тип пиццы',
  })
  readonly price: number;
}
